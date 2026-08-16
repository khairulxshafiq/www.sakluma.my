import type { Metadata } from "next";
import { vendors } from "@/data/site";

export const metadata: Metadata = { title: "Our Vendor" };

export default function OurVendorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        Our Vendor
      </h1>
      <p className="mt-2 text-smoke-300">
        Support us by buying our product — salurkan terus dari kami atau vendor rasmi.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {vendors.map((v) => (
          <a
            key={v.name}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-smoke-800 bg-smoke-900/50 p-6 transition hover:border-ember-500/60"
          >
            <h2 className="font-display text-xl font-bold text-ember-400 group-hover:text-ember-300">
              {v.name}
            </h2>
            <p className="mt-2 text-sm text-smoke-300">{v.desc}</p>
            <p className="mt-4 text-sm font-semibold text-smoke-100 group-hover:text-ember-400">
              Kunjungi →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
