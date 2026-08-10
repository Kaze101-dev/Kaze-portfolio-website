"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = { id: string; x: number; y: number; r?: number };

const nodes: Node[] = [
  { id: "a", x: 60, y: 60, r: 4 },
  { id: "b", x: 210, y: 30, r: 3 },
  { id: "c", x: 300, y: 120, r: 5 },
  { id: "d", x: 150, y: 160, r: 3 },
  { id: "e", x: 40, y: 220, r: 3 },
  { id: "f", x: 260, y: 250, r: 4 },
  { id: "g", x: 130, y: 300, r: 3 },
  { id: "h", x: 330, y: 320, r: 3 },
];

const edges: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["a", "d"],
  ["d", "c"],
  ["d", "e"],
  ["c", "f"],
  ["d", "g"],
  ["f", "g"],
  ["f", "h"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function NetworkGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 360 360"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of connected system nodes"
    >
      {edges.map(([from, to], i) => {
        const a = findNode(from);
        const b = findNode(to);
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#233257"
            strokeWidth={1}
            initial={shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: "easeInOut" }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r ?? 3}
          fill={n.id === "c" || n.id === "f" ? "#3E7BFA" : "#4A5A85"}
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
        />
      ))}
    </svg>
  );
}
