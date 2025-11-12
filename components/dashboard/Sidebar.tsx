"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Home, Box, BarChart, User } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Products", href: "/dashboard/productcard", icon: Box },
    { name: "Analytics", href: "/dashboard/analyticscard", icon: BarChart },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8 text-foreground">App Guts</h2>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                active
                  ? "bg-primary/20 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <Button
        variant="outline"
        className="mt-auto"
        onClick={async () => {
          await fetch("/api/logout"); // create a logout API route or supabase signOut
          window.location.href = "/";
        }}
      >
        <LogOut size={16} className="mr-2" />
        Logout
      </Button>
    </aside>
  );
}
