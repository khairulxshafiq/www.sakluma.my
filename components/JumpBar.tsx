import { jumpLinks } from "@/data/site";

export default function JumpBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-smoke-800 bg-smoke-950/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-5">
        {jumpLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 py-2.5 text-[10px] text-smoke-200 hover:bg-smoke-900 hover:text-ember-400"
          >
            <span className="text-lg leading-none">{l.emoji}</span>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
