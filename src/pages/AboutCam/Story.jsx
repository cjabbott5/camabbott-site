import React from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import camPhoto from "../../assets/cam-profile.jpg"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

const AboutSection = () => {
  return (
    <div className="bg-pink-100 text-gray-900 py-16 px-6 md:px-12">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        
        {/* Left Column - Text */}
<motion.div
  className="md:w-2/3"
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
>
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-4 mb-6"
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <h1 className="text-3xl text-cherry-400 font-bold mb-2">
      Cam Abbott (they/he)
    </h1>
    <p className="text-2xl text-cherry-400 ">
      Strategist • Advocate • Survivor
    </p>
  </motion.div>

  <div className="text-black px-4 md:px-4 max-w-4xl mx-auto">
  <p className="text-xl mb-6">
    I'm a transmasc person living with bipolar disorder. I’ve been locked in psychiatric units and handed papers stripping me of my rights. I’ve been restrained, medicated without consent, and left to fight for basic things—like my glasses, food, or the right to go home. I’ve also rebuilt my life from nothing. <br /> After fire, after hospitalization, after losing nearly everything.
  </p>

  <p className="text-xl mb-6 italic text-center">
  I carry the weight of what I’ve lived through—and I channel it into what I build.
  </p>

  <p className="text-xl mb-6">
    I don’t just want mental healthcare to be better—I need it to be. Not just for me, but for everyone who's ever felt powerless inside a system that was supposed to help. Every part of me—my strategic brain, my lived experience, my business training—is focused on making care more humane and healing. 
  </p>

  <p className="text-xl mb-6">
    My work is about rethinking how care actually feels. It’s about creating tools, systems, and spaces that help people reclaim their recovery on their own terms.
  </p>

  <p className="text-xl mb-6">
    I’ve lived what happens when care becomes control. I know the violence of being silenced, stripped of rights, and left to disappear. That’s why I’m building something better. For all of us.
  </p>

  <p className="text-xl mb-6 font-semibold text-center">
    Because even in the wreckage, I’ve seen what’s possible. And I still believe we can build a system that heals.
  </p>
</div>

  <p className="mb-2 text-2xl font-semibold">My background includes:</p>
  <ul className="mb-4 list-disc list-inside text-xl space-y-2">
    <li>Strategic consulting across a variety of industries at Ernst & Young (EY)</li>
    <li>Specializing in leveraging data & insights to drive large-scale transformations</li>
    <li>B.S.B.A., UNC-Chapel Hill’s Kenan-Flagler Business School</li>
  </ul>
  <p className="mb-8 text-xl italic border-l-4 border-white pl-4">
    I don’t just study the system—I survived it. <br />
    I’ve seen how bureaucracy and stigma can strip patients of autonomy and dignity. My work is about redesigning mental healthcare—removing barriers, restoring trust, and creating systems that truly serve the people they’re meant to help.
  </p>

  {/* Buttons + LinkedIn Icon */}
  <div className="flex flex-col sm:flex-row items-center gap-8 mb-4">
    <motion.a
      href="/projects"
      className="bg-black text-white px-6 py-2 rounded-full text-lg hover:bg-pink-400 font-medium"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      Explore My Work
    </motion.a>
    <motion.a
      href="/help"
      className="bg-pink-400 text-white px-6 py-2 rounded-full text-lg hover:bg-sky-400 font-medium"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      Access Resources
    </motion.a>
    <a
      href="https://www.linkedin.com/in/cam-abbott"
      className="text-gray-800 hover:text-pink-400"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={64} />
    </a>
  </div>
</motion.div>

        {/* Right Column - Photo + Mission with hover effect */}
        <motion.div
          className="md:w-1/3 flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        >
          <motion.img
            src={camPhoto}
            alt="Cam Abbott"
            className="rounded-xl mb-6 border border-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <motion.div
            className="bg-sky-50 rounded-xl shadow-md border border-sky-200 min-h-[700px] p-6 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-xl text-pink-600 font-semibold mb-3 mt-3 text-center">My Mission</h2>
            <p className="mb-4 text-pink-600 text-md text-center">
              To redesign mental healthcare with lived experience at the center—
              ensuring patients have the tools, knowledge, and autonomy they
              need to navigate care on their terms. <br />
              <br />
              I believe in:
            </p>
            <ul className="list-disc list-inside text-md text-pink-600 px-4 space-y-2">
              <li>
                Breaking down barriers—whether that’s the stigma of
                mental illness, systemic failures, or the lack of
                trauma-informed care.
              </li>
              <li>
                Self-advocacy, autonomy, and systemic change.
              </li>
              <li>
                Mental health systems being built with—not just for—the people they serve.
              </li>
            </ul>
            <p className="mb-4 text-pink-600 text-center text-md italic">
            <br /> Mental healthcare should feel human. That means building spaces where people are seen, not pathologized; supported, not silenced. I believe in systems that honor the full complexity of people’s lives—where healing isn’t a privilege, but a right. My mission is to help redesign these systems from the inside out. <br />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
