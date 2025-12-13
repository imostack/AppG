"use client";

interface AnalyticsCardProps {
  title: string;
  value: number;
}

export function AnalyticsCard({ title, value }: AnalyticsCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}
