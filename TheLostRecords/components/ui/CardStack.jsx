import { useState } from "react";
import { motion } from "framer-motion";

const flowSteps = [
  {
    phase: "Collect",
    title: "The Collection",
    description: "We gather lived experience through story, survey, and conversation—because the system isn’t asking the right questions.",
    link: "/rebuild/collection",
  },
  {
    phase: "Collate",
    title: "The Responses",
    description: "We analyze patterns, pain points, and shared truths to understand where systems fail and how they could respond differently.",
    link: "/rebuild/responses",
  },
  {
    phase: "Create",
    title: "The Build",
    description: "We design early tools, frameworks, and interventions rooted in lived experience and systems thinking.",
    link: "/rebuild/build",
  },
  {
    phase: "Connect",
    title: "The Vision",
    description: "We imagine what mental healthcare could be if it were built with dignity, equity, and community leadership at the center.",
    link: "/rebuild/vision",
  },
];

export default function CardStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-zinc-950 text-white py-24 px-6 overflow-x-auto">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-sky-300">How Project Rebuild Works</h2>
        <p className="text-zinc-400 mt-4">Click a card to explore the process step-by-step.</p>
      </div>

      <div className="flex gap-4 justify-center items-stretch">
        {flowSteps.map((step, index) => (
          <motion.div
            key={step.phase}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer bg-zinc-900 rounded-xl p-6 shadow-md flex flex-col justify-start transition-all duration-300"
            animate={{
              flex: index === activeIndex ? 3 : 1,
              opacity: index === activeIndex ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ minWidth: "200px", maxWidth: "400px", height: "auto" }}
          >
            <div className="w-10 h-10 rounded-full bg-sky-300 text-black flex items-center justify-center font-bold text-lg mb-4 mx-auto">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-center">{step.phase}</h3>
            <p className="text-sm text-sky-300 italic text-center underline mb-2">
              <a href={step.link}>{step.title}</a>
            </p>
            {index === activeIndex && (
              <p className="text-base text-zinc-400 mt-2 text-left">{step.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
