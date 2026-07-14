"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import skills from "@/data/skills";

function MarqueeRow({ items, reverse = false }) {
  const animation = reverse ? "animate-marquee-reverse" : "animate-marquee";
  return (
    <div className="marquee-row overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max ${animation}`}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex gap-4 pr-4">
            {items.map((skill) => (
              <li
                key={skill.name}
                className="group pop flex shrink-0 cursor-default items-center gap-2.5 bg-panel px-5 py-2.5 transition-transform hover:-translate-y-1"
              >
                <img
                  src={skill.icon}
                  alt=""
                  loading="lazy"
                  className="h-6 w-6 grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                />
                <span className="font-typewriter text-sm tracking-wide whitespace-nowrap">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2);
  const rowOne = skills.slice(0, half);
  const rowTwo = skills.slice(half);

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Skills</SectionHeading>
      </div>
      <Reveal>
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
        <p className="mt-6 text-center font-typewriter text-xs tracking-[0.25em] text-chalk/40">
          hover to colorize
        </p>
      </Reveal>
    </div>
  );
}
