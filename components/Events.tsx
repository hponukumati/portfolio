import { ArrowUpRight } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { events } from "@/data/events";

export default function Events() {
  return (
    <BentoCard id="events" className="md:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">
        Events &amp; volunteering
      </h2>
      <div className="mt-3 divide-y divide-black/10">
        {events.map((e) => (
          <div key={e.name} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{e.name}</p>
                <p className="mt-0.5 flex items-center gap-2 text-xs text-muted">
                  <span className="rounded-full border border-black/10 px-2 py-0.5">
                    {e.role}
                  </span>
                  {e.date}
                </p>
              </div>
              {e.href && (
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${e.name} event page`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            {e.description && (
              <p className="mt-2 text-sm leading-6 text-muted">
                {e.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
