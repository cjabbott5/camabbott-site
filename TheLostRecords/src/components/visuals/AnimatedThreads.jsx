import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Ambient scroll thread — a vertical line down the left margin that fills as
 * you scroll, with a soft oxblood glow and a pulsing leading dot.
 * Fixed, behind content, non-interactive. Honors reduced-motion via CSS.
 */
export default function Thread() {
  const { scrollYProgress } = useScroll();
  // Smooth the fill so it eases rather than tracking 1:1 with the scrollbar.
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Ambient glow column */}
      <div className="fixed top-0 left-6 w-10 h-full z-0 block pointer-events-none">
        <div className="w-full h-full bg-accent/10 blur-3xl rounded-full" />
      </div>

      {/* Static rail (faint) + animated fill with leading dot */}
      <div className="fixed top-0 left-6 h-full z-10 block pointer-events-none">
        <div className="relative w-[2px] h-full">
          {/* faint full-height rail so the line reads even before scrolling */}
          <div className="absolute inset-0 w-full bg-hairline/50" />

          {/* animated oxblood fill */}
          <motion.div
            style={{ height }}
            className="absolute top-0 w-full bg-gradient-to-b from-accent-soft via-accent to-accent-strong opacity-80 shadow-[0_0_10px_rgba(157,52,46,0.55)]"
          >
            {/* glowing leading dot rides the growing edge */}
            <div className="lr-thread-dot absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent-soft shadow-[0_0_14px_4px_rgba(199,91,78,0.7)]" />
          </motion.div>
        </div>
      </div>
    </>
  );
}