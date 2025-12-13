// app/dashboard/campaigns/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CampaignsPage() {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetch() {
      if (!user) return;
      const { data } = await supabase.from("campaigns").select("*").eq("user_id", user.id);
      setCampaigns(data || []);
      setLoading(false);
    }
    fetch();
  }, [user]);

  const createCampaign = async () => {
    if (!name || !user) return;
    const { error } = await supabase.from("campaigns").insert({ user_id: user.id, name, status: "draft" });
    if (!error) {
      const { data } = await supabase.from("campaigns").select("*").eq("user_id", user.id);
      setCampaigns(data || []);
      setName("");
    }
  };

  if (loading) return <p>Loading campaigns...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Campaigns</h1>
        <div className="flex gap-2">
          <Input placeholder="New campaign name" value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={createCampaign}>Create</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {campaigns.length === 0 ? (
          <p className="text-muted-foreground">No campaigns yet — create one to get started.</p>
        ) : (
          campaigns.map((c) => (
            <div key={c.id} className="p-4 border rounded bg-card">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">Status: {c.status}</p>
              {/* Add actions: edit, view ads, toggle active */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
