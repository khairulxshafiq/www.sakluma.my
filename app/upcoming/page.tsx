import type { Metadata } from "next";
import { upcoming } from "@/data/site";

export const metadata: Metadata = { title: "Upcoming" };

export default function UpcomingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        Upcoming +
      </h1>
      <p className="mt-2 text-smoke-300">
        Apa yang sedang kami siapkan di dapur asap.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {upcoming.map((u) => (
          <div
            key={u.name}
            className="rounded-2xl border border-dashed border-ember-500/40 bg-smoke-900/40 p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-bold text-white">{u.name}</h2>
              <span className="rounded-full bg-ember-500/15 px-3 py-1 text-xs font-semibold text-ember-400">
                {u.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-smoke-300">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
