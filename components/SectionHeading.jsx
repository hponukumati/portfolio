"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">{children}</h2>
      <div className="rule-accent mt-4 w-28" />
    </motion.div>
  );
}
