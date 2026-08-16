import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/site";

export const metadata: Metadata = { title: "Product List" };

export default function ProductListPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        Product List
      </h1>
      <p className="mt-2 text-smoke-300">
        Semua produk salai tradisional — diasap dengan tempurung kelapa.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
      <p className="mt-8 text-xs text-smoke-500">
        Harga mungkin berubah. Order terus melalui WhatsApp atau Shopee untuk harga semasa.
      </p>
    </div>
  );
}
