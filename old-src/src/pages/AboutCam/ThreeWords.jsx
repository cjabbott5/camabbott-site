import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const words = [
  {
    title: "Strategic",
    description:
      "I think in systems. Whether it’s healthcare, business, or identity—I’m always looking for the deeper pattern, the root cause, the leverage point. I don’t just want things to work; I want them to make sense and hold up under pressure. I ask the uncomfortable questions. I challenge what’s “normal.” And when something’s broken, I don’t slap a band-aid on it—I reassess the whole framework.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&h=600&q=80",
  },
  {
    title: "Queer",
    description:
      "Being queer isn’t just who I am—it’s how I see the world. I question binaries, break molds, and reject what doesn’t feel right. I’ve had to carve out my own path in rooms that weren’t built for me, so I make space for others while I’m at it. I lead with curiosity, contradiction, and truth. I don’t sanitize my identity to fit in—I use it to challenge systems and push for something better.",
    image:
      "https://images.unsplash.com/photo-1657974252991-3a7b4f90779d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Relentless",
    description:
      "I’ve had to start over more than once. I’ve survived psychiatric hospitals, losing everything in a fire, and being written off because I’m queer, trans, and mentally ill. But I didn’t just survive—I kept going. I move with urgency because I know what it’s like to lose time, safety, and a sense of self. I don’t wait for things to get better. I make them better. I rebuild, I show up, and I never give up.",
    image:
      "https://images.unsplash.com/photo-1591104260532-17cc0884098f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FlipCard = ({ title, description, image }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-96 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`w-full h-full flip-card ${flipped ? "flipped" : ""}`}>
        <div className="flip-front relative w-full h-full rounded-xl overflow-hidden shadow-xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl font-bold">{title}</h2>
          </div>
        </div>
        <div className="flip-back absolute w-full h-full bg-pink-200 text-pink-900 text-base font-medium flex items-center justify-center p-6 text-center rounded-xl shadow-xl">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function CamInThreeWords() {
  return (
    <motion.div
      className="min-h-screen bg-pink-50 px-6 py-16 flex flex-col items-center"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold text-powderBlue-500 text-center">
        Cam in Three Words
      </h1>
      <p className="text-sm text-powderBlue-500  italic mt-2 mb-12 text-center">
        Click any card to learn more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {words.map((word, index) => (
          <FlipCard key={index} {...word} />
        ))}
      </div>
    </motion.div>
  );
}
