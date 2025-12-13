// app/dashboard/ads/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function AdsPage() {
  const { user } = useAuth();
  const [ads, setAds] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      if (!user) return;
      const { data } = await supabase.from("ads").select("*").eq("user_id", user.id);
      setAds(data || []);
    })();
  }, [user]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Ads</h1>
        <Button>New Ad</Button>
      </div>

      <div className="grid gap-4">
        {ads.length === 0 ? (
          <p className="text-muted-foreground">No ads yet; create a campaign first.</p>
        ) : (
          ads.map((ad) => (
            <div key={ad.id} className="p-4 border rounded bg-card">
              <h3 className="font-semibold">{ad.title}</h3>
              <p className="text-sm text-muted-foreground">{ad.platform}</p>
              <p className="text-sm">Status: {ad.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
