"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import contacts from "@/data/contacts";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>Contact</SectionHeading>

      <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center">
        <Reveal className="flex-1">
          <p className="font-display text-5xl uppercase leading-none sm:text-6xl">
            Let&apos;s build{" "}
            <span style={{ color: "var(--accent)" }}>something.</span>
          </p>
          <p className="mt-5 max-w-md font-serif text-lg leading-relaxed text-chalk/55">
            Open to full-time roles, freelance work, and interesting problems. If you have
            something in mind, reach out — I respond to everything.
          </p>
        </Reveal>

        <div className="flex w-full flex-col gap-4 lg:w-auto lg:min-w-96">
          {contacts.map((contact, i) => (
            <Reveal key={contact.name} delay={i * 0.08}>
              <Magnetic strength={0.15}>
                <a
                  href={contact.url}
                  target={contact.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="pop group block bg-panel px-6 py-5 transition-colors hover:bg-chalk hover:text-night"
                >
                  <span className="block font-typewriter text-[10px] tracking-[0.3em] text-chalk/40 group-hover:text-night/50">
                    {contact.tagline}
                  </span>
                  <span className="mt-2 flex items-baseline justify-between gap-4">
                    <span className="font-display text-2xl uppercase tracking-wide">
                      {contact.name}
                    </span>
                    <span className="font-typewriter text-xs text-chalk/60 group-hover:text-night/70">
                      {contact.label}
                    </span>
                  </span>
                </a>
              </Magnetic>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
