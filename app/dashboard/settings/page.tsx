// app/dashboard/settings/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      if (!user) return;
      setDisplayName(user.user_metadata?.full_name || "");
      setAvatarUrl(user.user_metadata?.avatar_url || "");
    })();
  }, [user]);

  const updateProfile = async () => {
    if (!user) return;
    // persist to profiles table
    const { error } = await supabase.from("profiles").upsert({ id: user.id, display_name: displayName, avatar_url: avatarUrl });
    if (error) setMessage(error.message); else setMessage("Profile updated");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>

      <div className="max-w-md space-y-4">
        <div>
          <label className="block mb-1 text-sm">Display name</label>
          <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 text-sm">Avatar URL</label>
          <Input value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} />
        </div>

        <Button onClick={updateProfile}>Save profile</Button>
        {message && <p className="text-sm text-primary">{message}</p>}
      </div>
    </div>
  );
}
