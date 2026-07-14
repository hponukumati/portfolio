"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function ScrambleName({ children }) {
  const text = children;
  const [chars, setChars] = useState(() =>
    text.split("").map((c) => (c === " " ? " " : randomChar()))
  );
  const count = useRef(0);

  useEffect(() => {
    count.current = 0;
    const id = setInterval(() => {
      count.current += 1;
      setChars(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (count.current >= i + 8) return char;
          return randomChar();
        })
      );
      if (count.current >= text.length + 8) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [text]);

  return <span className="block">{chars.join("")}</span>;
}

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display text-7xl uppercase leading-[0.88] tracking-wide sm:text-[10rem]"
        style={{ textShadow: "4px 4px 0 var(--accent)" }}
      >
        <ScrambleName>Sri Harsha</ScrambleName>
        <ScrambleName>Ponukumati</ScrambleName>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 font-typewriter text-sm tracking-[0.25em] text-chalk/50 sm:text-base"
      >
        Software engineer &nbsp;·&nbsp; Full-stack &nbsp;·&nbsp; ML &nbsp;·&nbsp; Cloud
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-5"
      >
        <Magnetic>
          <a
            href="#projects"
            className="pop inline-block bg-chalk px-7 py-3 font-display text-lg uppercase tracking-[0.15em] text-night transition-colors hover:bg-accent hover:border-accent hover:text-chalk"
          >
            View My Work
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#contact"
            className="pop inline-block bg-night px-7 py-3 font-display text-lg uppercase tracking-[0.15em] transition-colors hover:text-accent"
          >
            Get in Touch
          </a>
        </Magnetic>
      </motion.div>

      <motion.p
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 font-typewriter text-xs tracking-[0.3em] text-chalk/30"
      >
        Scroll ↓
      </motion.p>
    </div>
  );
}
