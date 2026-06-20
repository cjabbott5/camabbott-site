import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Ambient scroll thread — a restrained archival rail.
 * Fixed, behind content, non-interactive. Honors reduced-motion via CSS.
 */
export default function Thread() {
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Soft ambient column */}
      <div className="fixed top-0 left-4 h-full w-8 z-0 pointer-events-none sm:left-6">
        <div className="h-full w-full rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Static rail + scroll fill */}
      <div className="fixed top-0 left-4 h-full z-0 pointer-events-none sm:left-6">
        <div className="relative h-full w-px">
          <div className="absolute inset-0 w-full bg-hairline/35" />

          <motion.div
            style={{ height }}
            className="absolute top-0 w-full bg-gradient-to-b from-accent-soft via-accent to-accent-strong opacity-65 shadow-[0_0_8px_rgba(157,52,46,0.35)]"
          >
            <div className="lr-thread-dot absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-soft shadow-[0_0_10px_2px_rgba(199,91,78,0.45)]" />
          </motion.div>
        </div>
      </div>
    </>
  );
}