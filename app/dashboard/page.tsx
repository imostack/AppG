// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { SubscriptionCard } from "@/components/dashboard/SubscriptionCard";
import { ProductCard } from "@/components/dashboard/ProductCard";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [renewDomain, setRenewDomain] = useState("");

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      if (!user) return;
      // fetch profile, subscriptions & products
      const { data: subs } = await supabase.from("subscriptions").select("*, product(*)").eq("user_id", user.id);
      const { data: prods } = await supabase.from("products").select("*").eq("active", true);

      setSubscriptions(subs || []);
      setProducts(prods || []);
      setLoading(false);
    }
    fetch();
  }, [user]);

  const handleQuickRenew = async (subId: string) => {
    // Example: mark requested_renewal; replace with proper billing flow
    await supabase.from("subscriptions").update({ requested_renewal: true, domain: renewDomain }).eq("id", subId);
    // refresh
    const { data: subs } = await supabase.from("subscriptions").select("*, product(*)").eq("user_id", user?.id);
    setSubscriptions(subs || []);
  };

  if (loading) return <p>Loading dashboard...</p>;

  const activeCount = subscriptions.filter(s => s.status === "active").length;
  const upcoming = subscriptions.filter(s => s.status === "active" && new Date(s.expiry_date) < new Date(Date.now() + 30*24*60*60*1000)).length;
  const available = products.filter(p => !subscriptions.some(s => s.product.id === p.id)).length;

  return (
    <div>
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.user_metadata?.full_name || user?.email}</h1>
          <p className="text-sm text-muted-foreground">Manage your products, campaigns and subscriptions from here.</p>
        </div>

        <div className="flex items-center gap-4">
          {/* placeholder for user avatar */}
          <div className="w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center">
            {user?.user_metadata?.avatar_url ? (
              <Image src={user.user_metadata.avatar_url} alt="avatar" width={48} height={48} className="rounded-full" />
            ) : (
              <span>{(user?.email || "U").charAt(0).toUpperCase()}</span>
            )}
          </div>
        </div>
      </header>

      {/* analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <AnalyticsCard title="Active Subscriptions" value={activeCount} />
        <AnalyticsCard title="Available Products" value={available} />
        <AnalyticsCard title="Upcoming Expirations (30d)" value={upcoming} />
      </div>

      {/* Subscriptions section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Subscriptions</h2>
          <div className="flex gap-2 items-center">
            <Input placeholder="domain (optional)" value={renewDomain} onChange={(e) => setRenewDomain((e.target as HTMLInputElement).value)} />
          </div>
        </div>

        {subscriptions.length === 0 ? (
          <p className="text-muted-foreground">No active subscriptions. Explore products below.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscriptions.map((s) => (
              <div key={s.id} className="space-y-2">
                <SubscriptionCard subscription={s} />
                {s.product.type === "paid" && s.status === "active" && (
                  <Button onClick={() => handleQuickRenew(s.id)}>Request Renewal</Button>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Products */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Available Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
