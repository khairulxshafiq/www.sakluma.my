import Image from "next/image";
import { contact } from "@/data/site";

type Props = {
  name: string;
  desc: string;
  image: string;
  price: string;
};

export default function ProductCard({ name, desc, image, price }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-smoke-800 bg-smoke-900/50 transition hover:border-ember-500/60">
      <div className="relative aspect-square overflow-hidden bg-smoke-800">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ember-400">{name}</h3>
          <span className="rounded-full bg-ember-500/15 px-2 py-0.5 text-xs font-semibold text-ember-400">
            {price}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-smoke-300">{desc}</p>
        <a
          href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hai Sakluma! Saya nak order ${name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-lg bg-smoke-800 py-2 text-center text-sm font-semibold text-smoke-100 transition hover:bg-ember-500 hover:text-white"
        >
          Order WhatsApp
        </a>
      </div>
    </div>
  );
}
