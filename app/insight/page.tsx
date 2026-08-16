import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/data/site";

export const metadata: Metadata = { title: "Insight" };

const stories = [
  {
    title: "9 Jam Menunggu, Satu Rasa Warisan",
    excerpt:
      "Dulu nenek kami perlu tunggu 9 jam untuk 1 hidangan salai. Ini kisah di sebalik kesabaran itu.",
    image: "/images/story-1.jpg",
  },
  {
    title: "Dari Dapur Asap ke Meja Anda",
    excerpt:
      "Bagaimana tempurung kelapa dipilih, dibakar, dan mengubah rasa daging menjadi nostalgia.",
    image: "/images/story-2.jpg",
  },
];

export default function InsightPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        Sakluma Insight
      </h1>
      <p className="mt-2 text-smoke-300">
        Cerita, ilmu dan perjalanan {brand.name}.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {stories.map((s) => (
          <article
            key={s.title}
            className="overflow-hidden rounded-2xl border border-smoke-800 bg-smoke-900/50"
          >
            <div className="relative aspect-video bg-smoke-800">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-bold text-ember-400">{s.title}</h2>
              <p className="mt-2 text-sm text-smoke-300">{s.excerpt}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-smoke-500">
                Akan datang — cerita penuh
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
