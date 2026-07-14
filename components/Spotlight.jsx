"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// a searchlight sweeping the scene, trailing slightly behind the cursor
export default function Spotlight() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 100, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 100, damping: 22, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed -left-[300px] -top-[300px] z-[2] h-[600px] w-[600px] rounded-full [background:radial-gradient(circle,color-mix(in_srgb,var(--fg)_10%,transparent),transparent_62%)]"
    />
  );
}
