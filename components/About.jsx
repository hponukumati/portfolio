"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stats = [
  { value: "3+", label: "Years coding" },
  { value: "22", label: "Tools in stack" },
  { value: "4", label: "Projects shipped" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>About</SectionHeading>

      <div className="grid items-start gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <motion.div
            initial={{ rotate: -0.4 }}
            whileHover={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pop bg-panel p-8 sm:p-10"
          >
            <p className="font-serif text-lg leading-relaxed text-chalk/85 sm:text-xl">
              I&apos;m a software engineer with a strong foundation in full-stack development,
              machine learning, and cloud computing. I work across the whole stack — from
              building user-facing interfaces to designing scalable backends and deploying to AWS
              and GCP.
            </p>
            <p className="mt-5 font-serif text-lg leading-relaxed text-chalk/85 sm:text-xl">
              I care about writing software that&apos;s well-considered and built to last. I pick
              up new tools fast, work well across teams, and I&apos;m most at home on problems
              that sit at the intersection of engineering and product.
            </p>
            <p className="mt-5 font-serif text-base italic text-chalk/50">
              Fluent in Python, Java, and JavaScript. Comfortable everywhere in between.
            </p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="flex flex-col gap-5">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="pop bg-panel p-6"
              >
                <p
                  className="font-display text-5xl leading-none"
                  style={{ color: "var(--accent)" }}
                >
                  {value}
                </p>
                <p className="mt-1 font-typewriter text-sm tracking-widest text-chalk/60">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
