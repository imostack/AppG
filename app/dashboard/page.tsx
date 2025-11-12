"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SubscriptionCard } from "@/components/dashboard/SubscriptionCard";
import { ProductCard } from "@/components/dashboard/ProductCard";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { motion } from "framer-motion";

interface UserProfile {
  id: string;
  display_name: string;
  email: string;
  avatar_url?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  type: "free" | "paid";
  price?: number;
  slug: string;
}

interface Subscription {
  id: string;
  product: Product;
  start_date: string;
  expiry_date: string;
  status: "active" | "expired" | "pending";
  domain?: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Renewal & profile state
  const [renewDomain, setRenewDomain] = useState<{ [subId: string]: string }>({});
  const [renewMessage, setRenewMessage] = useState<{ [subId: string]: string }>({});
  const [renewLoading, setRenewLoading] = useState<{ [subId: string]: boolean }>({});
  const [editingName, setEditingName] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [profileMessage, setProfileMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userData.user.id)
          .single();

        setUser(profile);
        setDisplayName(profile?.display_name || "");
      }

      const { data: subs } = await supabase
        .from("subscriptions")
        .select("*, product(*)")
        .eq("user_id", userData.user?.id);

      setSubscriptions(subs || []);

      const { data: allProducts } = await supabase
        .from("products")
        .select("*")
        .eq("active", true);

      setProducts(allProducts || []);
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleRenew = async (subscriptionId: string) => {
    const domain = renewDomain[subscriptionId] || "";
    setRenewLoading((prev) => ({ ...prev, [subscriptionId]: true }));
    setRenewMessage((prev) => ({ ...prev, [subscriptionId]: "" }));

    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({ requested_renewal: true, domain })
        .eq("id", subscriptionId);

      if (error) throw error;

      setRenewMessage((prev) => ({ ...prev, [subscriptionId]: "Renewal request sent!" }));
    } catch (err: any) {
      setRenewMessage((prev) => ({ ...prev, [subscriptionId]: err.message || "Error renewing" }));
    } finally {
      setRenewLoading((prev) => ({ ...prev, [subscriptionId]: false }));
    }
  };

  const handleNameUpdate = async () => {
    if (!user) return;
    setProfileMessage("");
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ display_name: displayName })
        .eq("id", user.id);

      if (error) throw error;

      setUser((prev) => prev ? { ...prev, display_name: displayName } : prev);
      setProfileMessage("Display name updated!");
      setEditingName(false);
    } catch (err: any) {
      setProfileMessage(err.message || "Error updating name");
    }
  };

  if (loading) return <p className="text-center mt-20">Loading dashboard...</p>;

  const activeProductIds = subscriptions.map((s) => s.product.id);
  const availableProducts = products.filter((p) => !activeProductIds.includes(p.id));

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user?.display_name || "User"}!
            </h1>

            {/* Edit display name */}
            {editingName ? (
              <div className="flex items-center gap-2 mt-2">
                <Input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-card border-border/40 text-foreground placeholder:text-muted-foreground"
                />
                <Button size="sm" onClick={handleNameUpdate}>
                  Save
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setEditingName(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="outline" onClick={() => setEditingName(true)}>
                Edit Display Name
              </Button>
            )}
            {profileMessage && <p className="text-sm text-primary mt-1">{profileMessage}</p>}
          </div>

          {user?.avatar_url && (
            <Image
              src={user.avatar_url}
              alt="Profile picture"
              width={48}
              height={48}
              className="rounded-full border border-border"
            />
          )}
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard title="Active Subscriptions" value={subscriptions.filter(s => s.status === "active").length} />
          <AnalyticsCard title="Products Available" value={availableProducts.length} />
          <AnalyticsCard title="Upcoming Expirations" value={subscriptions.filter(s => s.status === "active" && new Date(s.expiry_date) < new Date(Date.now() + 30*24*60*60*1000)).length} />
        </div>

        {/* Subscriptions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Your Subscriptions</h2>
          {subscriptions.length === 0 ? (
            <p className="text-muted-foreground">You haven’t subscribed to any paid products yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subscriptions.map((s) => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <SubscriptionCard subscription={s} />

                  {s.status === "active" && s.product.type === "paid" && (
                    <div className="mt-2 space-y-2">
                      <Input
                        placeholder="Domain (if applicable)"
                        value={renewDomain[s.id] || s.domain || ""}
                        onChange={(e) =>
                          setRenewDomain((prev) => ({ ...prev, [s.id]: e.target.value }))
                        }
                      />
                      <Button
                        onClick={() => handleRenew(s.id)}
                        disabled={renewLoading[s.id]}
                        className="w-full"
                      >
                        {renewLoading[s.id] ? "Sending..." : "Request Renewal"}
                      </Button>
                      {renewMessage[s.id] && (
                        <p className="text-sm text-muted-foreground">{renewMessage[s.id]}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Available Products */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Available Products</h2>
          {availableProducts.length === 0 ? (
            <p className="text-muted-foreground">No new products available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
