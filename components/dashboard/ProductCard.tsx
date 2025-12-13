"use client";

import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  description: string;
  type: "free" | "paid";
  price?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
        {product.type === "paid" && (
          <p className="text-sm font-medium mt-2 text-foreground">
            ${product.price?.toFixed(2)}
          </p>
        )}
      </div>
      <Button className="mt-4 w-full" size="sm">
        {product.type === "paid" ? "Subscribe" : "Get Started"}
      </Button>
    </div>
  );
}
