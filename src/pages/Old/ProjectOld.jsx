import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Thread from "@/components/visuals/AnimatedThreads";
import VantaBackground from '../../components/visuals/VantaBackground';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
};

const flowSteps = [
  {
    phase: "Collect",
    title: "Share Your Story",
    description:
      "We gather lived experience through story, survey, and conversation—because the system isn’t asking the right questions.",
    link: "/rebuild/collection",
  },
  {
    phase: "Collate",
    title: "Trace the Patterns",
    description:
      "We analyze patterns, pain points, and shared truths to understand where systems fail and how they could respond differently.",
    link: "/rebuild/responses",
  },
  {
    phase: "Create",
    title: "Build the Future",
    description:
      "We design early tools, frameworks, and interventions rooted in lived experience and systems thinking.",
    link: "/rebuild/build",
  },
  {
    phase: "Connect",
    title: "Imagine What’s Possible",
    description:
      "We imagine what mental healthcare could be if it were built with dignity, equity, and community leadership at the center.",
    link: "/rebuild/vision",
  },
];



export default function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Thread> </Thread>
      <div className="bg-neutral-950 text-white font-sans">

       {/* Hero Section */}
<section
  className="relative min-h-screen text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1665203413600-ee7d9e883e97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Centered Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 min-h-screen">
    <motion.h1
      className="text-5xl md:text-6xl font-bold drop-shadow-lg leading-tight"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      Have you ever mourned the brokenness of our mental healthcare system?
    </motion.h1>
    <motion.p
      className="text-xl italic md:text-2xl mt-12 max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={2}
    >
      You were never the only one. <br className="sm:hidden" /> The system just made you feel like it.
    </motion.p>
  </div>

  {/* Bottom-Aligned Tagline */}
  <motion.p
    className="absolute bottom-24 right-6 text-2xl font-bold text-sky-300 md:text-3xl sm:mb-4 max-w-2xl text-right z-20"
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    custom={3}
  >
    We’re tracing the pattern <br />they hoped no one would notice.<br />

  </motion.p>
</section>


        {/* Welcome Section */}
        <section className="bg-zinc-950 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-36 h-36 bg-zinc-800 rounded-full flex items-center justify-center text-5xl font-bold text-sky-300 shadow-lg">
                PR
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl text-sky-300 font-semibold mb-8 text-center lg:text-left">Welcome to Project Rebuild</h2>
              <p className="text-zinc-300 text-xl leading-relaxed">
                Project Rebuild is a platform for transforming patient and provider pain into systemic change.
                It was born from the silence—too many stories of harm, neglect, and survival erased or ignored. That silence isn’t just tragic. It’s strategic. And it’s time to break it.
                <br /><br />
                This project exists to gather those stories, trace the patterns beneath them, and build a foundation for true reform.
               <br /><br />
                Through storytelling, research, and systems strategy, Project Rebuild aims to create a living library of lived experience—one that informs policy, reshapes culture, and reimagines what mental healthcare could be.
              </p>
            </div>
          </div>
        </section>

<div className="h-px w-1/2 bg-sky-300 my-16 mx-auto" />

        {/* CardStack Section */}
       <section className="bg-zinc-950 text-white text-center py-6 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-semibold text-sky-300">How Project Rebuild Works</h2>
    <p className="text-zinc-400 text-2xl mt-4 max-w-2xl mx-auto">
      This project follows a four-phase flow—each step builds from the last, grounded in lived experience and systems thinking.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {flowSteps.map((step, index) => (
      <div
        key={step.phase}
        className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800 hover:shadow-xl transition-shadow"
      >
        <div className="w-12 h-12 rounded-full bg-sky-300 text-black flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
          {index + 1}
        </div>
        <h3 className="text-2xl font-semibold mb-1">{step.phase}</h3>
        <p className="text-sky-300 text-md italic underline mb-2">
          <a href={step.link}>{step.title}</a>
        </p>
        <p className="text-zinc-400 text-md">{step.description}</p>
      </div>
    ))}
  </div>
</section>

<div className="h-px w-1/2 bg-sky-300 my-16 mx-auto" />


        {/* Section 1 */}
        <section className="max-w-4xl mx-auto mb-10 px-6">
          <motion.p
            className="text-2xl text-center md:text-2xl leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Whether you’ve lived through it as a patient or fought within it as a provider, those of us on the inside carry a truth that can’t be unseen.
            <br /><br />
            We know what it feels like to scream into silence. To be shuffled through a system that treats symptoms, not people. To try, and try again—only to feel more invisible, more drained, more alone.
          </motion.p>
        </section>

       {/* Dramatic Interlude */}
<section className="relative overflow-hidden text-center py-40 px-6 min-h-[300px]">
  <VantaBackground />

  {/* Overlay container for text */}
  <div className="relative z-10 flex justify-center items-center">
    <motion.div
      className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-5xl text-sky-300 font-bold">
        But what if it didn’t end there?
      </h2>
    </motion.div>
  </div>
</section>
        {/* Section 2 */}
        <section className="max-w-4xl mx-auto mt-8 py-12 px-6">
          <motion.p
            className="text-2xl md:text-2xl text-sky-300 text-center leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
          >
            What if our stories weren’t buried in intake notes or discharge papers—but lifted up, examined, and woven together as evidence for change?
          </motion.p>
        </section>

        <div className="h-px w-1/2 bg-sky-300 my-8 mx-auto" />

       {/* Section 3 */}
<section className="max-w-4xl mx-auto mb-12 py-12 px-6">
  <motion.p
    className="text-2xl md:text-2xl text-center leading-relaxed"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    custom={3}
  >
    Imagine a world where patient experiences were treated as data.
    Where provider insights were honored as strategy.
    Where the people most impacted by the system had the power to rebuild it.
    <br /><br />
    <span className="block font-semibold text-white">
      That’s the vision.
    </span>
    <span className="block font-semibold text-white">
      That’s the project.
    </span>
  </motion.p>
</section>

     {/* CTA */}
<section className="text-center py-12 px-6 bg-neutral-900">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    custom={4}
  >
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        to="/foundation/add"
        className="inline-block bg-white text-neutral-900 px-5 py-4 text-xl font-semibold rounded-lg shadow-md hover:bg-sky-300 transition"
      >
        Share Your Story
      </Link>
      <Link
        to="/foundation/data"
        className="inline-block bg-white text-neutral-900 px-8 py-4 text-xl font-semibold rounded-lg shadow-md hover:bg-sky-300 transition"
      >
        View the Data
      </Link>
      <Link
        to="/foundation/vision"
        className="inline-block bg-white text-neutral-900 px-8 py-4 text-xl font-semibold rounded-lg shadow-md hover:bg-sky-300 transition"
      >
        See the Vision
      </Link>
    </div>
  </motion.div>
</section>

      </div>
    </Layout>
  );
}
