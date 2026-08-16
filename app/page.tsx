import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brand, contest, jumpLinks, products } from "@/data/site";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lembu.png"
            alt="Sakluma salai tempurung kelapa"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-smoke-950/70 via-smoke-950/60 to-smoke-950" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-ember-400">
            {brand.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Salai Tradisional,{" "}
            <span className="text-ember-400">Asap Tempurung Kelapa</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-smoke-200">{brand.usp}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={jumpLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-ember-500 px-6 py-3 font-semibold text-white shadow-lg shadow-ember-500/20 hover:bg-ember-400"
            >
              🛍️ Beli di Shopee
            </a>
            <a
              href={jumpLinks[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-500"
            >
              💬 Order WhatsApp
            </a>
            <Link
              href="/product-list"
              className="rounded-xl border border-smoke-600 px-6 py-3 font-semibold text-smoke-100 hover:border-ember-400 hover:text-ember-400"
            >
              Lihat Produk →
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Our Product
          </h2>
          <p className="mt-2 text-smoke-300">Diasap dengan tempurung kelapa — warisan rasa</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* CERITA */}
      <section className="border-y border-smoke-800 bg-smoke-900/40">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/story-1.jpg"
              alt="Cerita Sakluma"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ember-400">Cerita Kami</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Warisan Yang Berbaloi Tunggu
            </h2>
            <p className="mt-4 leading-relaxed text-smoke-200">{brand.story}</p>
            <p className="mt-6 font-display text-xl italic text-ember-400">
              {brand.testimoni}
            </p>
            <p className="mt-1 text-xs text-smoke-400">Straight from our followers</p>
          </div>
        </div>
      </section>

      {/* KONTES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-ember-500/40 bg-gradient-to-br from-ember-500/15 to-smoke-900 p-8 text-center md:p-12">
          <p className="text-3xl">🎁</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            {contest.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-smoke-200">{contest.desc}</p>
          <a
            href={contest.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-ember-500 px-8 py-3 font-semibold text-white hover:bg-ember-400"
          >
            Isi Survey & Menang Baucar 🎉
          </a>
        </div>
      </section>
    </div>
  );
}
