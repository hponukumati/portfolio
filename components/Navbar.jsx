"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="ml-1 border-l border-chalk/20 py-1 pl-3 font-typewriter text-xs tracking-widest text-chalk/50 transition-colors hover:text-chalk"
    >
      {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "···"}
    </button>
  );
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="pop flex items-center gap-1 bg-night/90 px-4 py-2.5 backdrop-blur-md sm:gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-2 font-display text-sm uppercase tracking-[0.18em] transition-colors hover:text-accent sm:text-base"
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
