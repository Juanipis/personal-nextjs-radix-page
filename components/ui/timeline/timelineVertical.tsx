import React from "react";
import { motion } from "framer-motion";

/**
 * Main timeline container with the vertical gradient line.
 */
const ExperienceLine = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative ml-4">
      {/* Gradient timeline line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, var(--accent-9, #3b82f6) 0%, var(--accent-6, #93c5fd) 100%)",
        }}
      />
      {children}
    </div>
  );
};

/**
 * A single experience entry on the timeline.
 */
interface ExperienceItemProps {
  children: React.ReactNode;
  isLatest?: boolean;
}

const ExperienceItem = ({
  children,
  isLatest = false,
}: ExperienceItemProps) => {
  return (
    <div className="relative mb-6 pl-8">
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 z-10">
        <div
          className="w-3 h-3 rounded-full border-2"
          style={{
            background: isLatest
              ? "var(--accent-9, #3b82f6)"
              : "var(--color-background, white)",
            borderColor: "var(--accent-9, #3b82f6)",
          }}
        />
        {isLatest && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "2px solid var(--accent-9, #3b82f6)" }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      {/* Content card */}
      <div
        className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
        style={{
          background: "var(--color-surface, rgba(255,255,255,0.03))",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * A group of concurrent/simultaneous experiences displayed side by side.
 * Renders a single dot on the timeline with multiple cards branching out.
 */
interface ConcurrentGroupProps {
  children: React.ReactNode;
  label?: string;
}

const ConcurrentGroup = ({ children, label }: ConcurrentGroupProps) => {
  return (
    <div className="relative mb-6 pl-8">
      {/* Timeline dot for the group */}
      <div className="absolute left-[-5px] top-2 z-10">
        <div
          className="w-3 h-3 rounded-full border-2"
          style={{
            background: "var(--accent-9, #3b82f6)",
            borderColor: "var(--accent-9, #3b82f6)",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid var(--accent-9, #3b82f6)" }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Label badge */}
      {label && (
        <div className="mb-3">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-9, #3b82f6), var(--accent-7, #60a5fa))",
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Concurrent cards in a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {React.Children.map(children, (child) => (
          <div
            className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors relative"
            style={{
              background: "var(--color-surface, rgba(255,255,255,0.03))",
            }}
          >
            {/* Small connector line from the left edge to indicate branching */}
            <div
              className="hidden md:block absolute left-0 top-4 w-0 h-0 border-l-[6px] border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent -translate-x-full"
              style={{
                borderLeftColor: "var(--accent-8, #3b82f6)",
              }}
            />
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export { ExperienceLine, ExperienceItem, ConcurrentGroup };
