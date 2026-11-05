import { ArrowUpRight } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { contributions } from "@/data/openSource";

export default function OpenSource() {
  return (
    <BentoCard id="open-source" className="group flex flex-col md:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">Open source</h2>
      <div className="mt-3 flex flex-1 flex-col gap-5">
        {contributions.map((c) => (
          <div key={c.href} className="flex flex-1 flex-col">
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-medium text-emerald-700">
                Merged
              </span>
              {c.repo} · {c.merged}
            </p>
            <p className="mt-2 text-sm font-medium">{c.title}</p>
            <p className="mt-1 flex-1 text-sm leading-6 text-muted">
              {c.description}
            </p>
            <div className="mt-4 flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${c.repo} pull request`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-foreground transition-colors group-hover:border-accent group-hover:text-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
