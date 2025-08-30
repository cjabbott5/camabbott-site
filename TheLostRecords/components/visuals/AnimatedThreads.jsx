import { motion, useScroll, useTransform } from "framer-motion";

export default function Thread() {
  const { scrollYProgress } = useScroll(); // track entire page scroll


  // Animate the thread height from 0% to 100% as you scroll
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Ambient glow */}
      <div className="fixed top-0 left-6 w-8 h-full z-0 block pointer-events-none">
        <div className="w-full h-full bg-sky-400/10 blur-3xl rounded-full" />
      </div>

      {/* Animated thread */}
      <div className="fixed top-0 left-6 h-full z-10 flex items-start overflow-visible pointer-events-none">
        <motion.div
          style={{ height }}
          className="w-[2px] bg-gradient-to-b from-sky-300 to-sky-500 opacity-70 shadow-lg shadow-sky-400"
        />
      </div>
      <div className="fixed top-0 left-6 h-full z-10 block pointer-events-none">
  <div className="relative w-[2px] h-full">
    <motion.div
      style={{ height }}
      className="absolute top-0 w-full bg-gradient-to-b from-sky-300 to-sky-500 opacity-70 shadow-lg shadow-sky-400"
    />
  </div>
</div>
    </>
  );
}
