"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setEmail(user.email || "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profile) {
        setDisplayName(profile.display_name);
        setAvatarUrl(profile.avatar_url);
      }
    }

    fetchProfile();
  }, []);

  const handleProfileUpdate = async () => {
    setLoading(true);
    setMessage(null);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Update display name and avatar
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      display_name: displayName,
      avatar_url: avatarUrl,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Profile updated successfully!");
    }

    setLoading(false);
  };

  const handlePasswordChange = async () => {
    if (!password) {
      setMessage("Password cannot be empty");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated successfully!");
      setPassword("");
    }
    setLoading(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (error) {
      setMessage(error.message);
    } else {
      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      setAvatarUrl(publicUrlData.publicUrl);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-foreground mb-6">Profile Settings</h1>
      {message && <p className="text-sm mb-4 text-primary">{message}</p>}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-md"
      >
        {/* Avatar */}
        <div className="flex items-center gap-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-20 h-20 rounded-full border border-border"
            />
          )}
          <div>
            <Label>Profile Picture</Label>
            <Input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
        </div>

        {/* Display Name */}
        <div className="space-y-2">
          <Label>Display Name</Label>
          <Input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your display name"
          />
        </div>

        {/* Email (read-only for now) */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input value={email} readOnly />
        </div>

        <Button className="w-full" onClick={handleProfileUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </Button>

        {/* Change Password */}
        <div className="space-y-2">
          <Label>Change Password</Label>
          <Input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" onClick={handlePasswordChange} disabled={loading}>
            {loading ? "Updating..." : "Change Password"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
