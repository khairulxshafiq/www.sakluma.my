import { brand, contact, disclaimer, jumpLinks } from "@/data/site";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="border-t border-smoke-800 bg-smoke-950 pb-20 pt-10 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-display text-lg font-bold text-ember-400">{brand.name}</span>
          </div>
          <p className="mt-3 text-sm text-smoke-300">{brand.usp}</p>
          <div className="mt-4 flex gap-3">
            {jumpLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-smoke-800 text-lg hover:bg-ember-500"
              >
                {l.emoji}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-smoke-200">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-smoke-300">
            <li>📞 {contact.phone}</li>
            <li>✉️ {contact.email}</li>
            <li>✉️ {contact.email2}</li>
            <li>🛍️ <a className="hover:text-ember-400" href="http://shopee.com.my/saklomak" target="_blank" rel="noopener noreferrer">Shopee Sakloma</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-smoke-200">Sakluma</h4>
          <ul className="mt-3 space-y-2 text-sm text-smoke-300">
            <li><a className="hover:text-ember-400" href={asset("/product-list")}>Product List</a></li>
            <li><a className="hover:text-ember-400" href={asset("/ourvendor")}>Our Vendor</a></li>
            <li><a className="hover:text-ember-400" href={asset("/upcoming")}>Upcoming</a></li>
            <li><a className="hover:text-ember-400" href={asset("/insight")}>Insight</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-4 text-xs text-smoke-500">
        <p>{disclaimer}</p>
        <p className="mt-2">© {new Date().getFullYear()} {brand.name} · {brand.domain}</p>
      </div>
    </footer>
  );
}
