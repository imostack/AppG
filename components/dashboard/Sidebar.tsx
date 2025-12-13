// components/dashboard/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Layers, List, Settings, LogOut, BarChart } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Campaigns", href: "/dashboard/campaigns", icon: List },
    { name: "Ads", href: "/dashboard/ads", icon: Layers },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className={`bg-card border-r border-border min-h-screen transition-width ${collapsed ? "w-20" : "w-64"}`}>
      <div className="p-4 flex items-center justify-between">
        <Link href="/dashboard" className={`font-bold ${collapsed ? "text-sm" : "text-lg"}`}>
          App Guts
        </Link>
        <button
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-muted/10"
        >
          {collapsed ? "🔎" : "≡"}
        </button>
      </div>

      <nav className="p-2 flex flex-col gap-1">
        {links.map((l) => {
          const ActiveIcon = l.icon;
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                active ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-primary/5"
              }`}
            >
              <ActiveIcon size={18} />
              {!collapsed && <span>{l.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4">
        <button
          onClick={async () => {
            await fetch("/api/logout"); // or use supabase.auth.signOut() in client
            window.location.href = "/";
          }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md border border-border/40"
        >
          <LogOut size={16} /> {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
