import Link from "next/link";
import { brand, jumpLinks } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-smoke-800 bg-smoke-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-display text-lg font-bold tracking-wide text-ember-400">
            {brand.name}
            <span className="ml-1 text-xs font-normal text-smoke-400">{brand.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-smoke-200 md:flex">
          <Link href="/" className="hover:text-ember-400">Home</Link>
          <Link href="/product-list" className="hover:text-ember-400">Product List</Link>
          <Link href="/ourvendor" className="hover:text-ember-400">Our Vendor</Link>
          <Link href="/upcoming" className="hover:text-ember-400">Upcoming</Link>
          <Link href="/insight" className="hover:text-ember-400">Insight</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={jumpLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-ember-500 px-3 py-2 text-sm font-semibold text-white hover:bg-ember-400"
          >
            🛍️ Shopee
          </a>
          <a
            href={jumpLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500 sm:block"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Nav mobile */}
      <nav className="flex items-center justify-around border-t border-smoke-800 px-2 py-2 text-xs text-smoke-200 md:hidden">
        <Link href="/" className="hover:text-ember-400">Home</Link>
        <Link href="/product-list" className="hover:text-ember-400">Product List</Link>
        <Link href="/ourvendor" className="hover:text-ember-400">Our Vendor</Link>
        <Link href="/upcoming" className="hover:text-ember-400">Upcoming</Link>
        <Link href="/insight" className="hover:text-ember-400">Insight</Link>
      </nav>
    </header>
  );
}
