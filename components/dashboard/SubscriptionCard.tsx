"use client";

interface Product {
  id: string;
  name: string;
  description: string;
  type: "free" | "paid";
  price?: number;
}

interface Subscription {
  id: string;
  product: Product;
  start_date: string;
  expiry_date: string;
  status: "active" | "expired" | "pending";
  domain?: string;
}

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-foreground">{subscription.product.name}</h3>
      <p className="text-sm text-muted-foreground">{subscription.product.description}</p>
      <p className="text-xs mt-2 text-muted-foreground">
        Status: <span className={subscription.status === "active" ? "text-green-600" : "text-red-500"}>{subscription.status}</span>
      </p>
      <p className="text-xs text-muted-foreground">
        Start: {new Date(subscription.start_date).toLocaleDateString()}
      </p>
      <p className="text-xs text-muted-foreground">
        Expiry: {new Date(subscription.expiry_date).toLocaleDateString()}
      </p>
      {subscription.domain && (
        <p className="text-xs text-muted-foreground">Domain: {subscription.domain}</p>
      )}
    </div>
  );
}
