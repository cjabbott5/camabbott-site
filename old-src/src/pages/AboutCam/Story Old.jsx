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
    <h1 className="text-4xl text-cherry-400 font-bold mb-2">
      Cam Abbott (they/he)
    </h1>
    <p className="text-3xl text-cherry-400 font-semibold">
      Strategist • Advocate • Survivor
    </p>
  </motion.div>

  <p className="text-2xl mb-6">
  I'm a strategist and mental health advocate focused on transforming mental healthcare into something more humane, inclusive, and healing. My goal is to create trauma-informed, patient-centered experiences that empower people—not just to survive the system, but to reclaim their recovery on their own terms.
  </p>
  <p className="text-2xl mb-6">
  As a transmasc person living with bipolar disorder, I’ve spent time on both sides of the healthcare system—as a patient, and now as someone building toward systemic change. Each time I’ve been hospitalized, I’ve witnessed firsthand how the system often prioritizes containment over care. But I’ve also seen the cracks where healing could happen—if we dared to build something better.
  </p>
  <p className="text-2xl mb-6">
  These lived experiences shape everything I do. They inform how I approach strategy, product design, and care innovation. I use that insight—paired with professional training in business strategy and healthcare transformation—to bridge research, advocacy, and execution. I'm not just thinking about what needs to change. I'm building it.
  </p>
  <p className="mb-2 text-2xl font-semibold">My background includes:</p>
  <ul className="mb-4 list-disc list-inside text-xl space-y-2">
    <li>Strategic consulting across a variety of industries at Ernst & Young (EY)</li>
    <li>Specializing in leveraging data & insights to drive large-scale transformations</li>
    <li>B.S.B.A., UNC-Chapel Hill’s Kenan-Flagler Business School</li>
  </ul>
  <p className="mb-8 text-xl italic border-l-4 border-white pl-4">
    I don’t just study the system—I survived it. <br />
    I understand firsthand how patients become trapped by bureaucracy, denied autonomy, and left searching for compassionate, effective care. My mission is to dismantle those barriers, redesigning mental healthcare so it works for the people it serves.
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
      See How I Can Help
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
            className="bg-sky-100 rounded-xl shadow-md border border-sky-200 min-h-[750px] p-6 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-xl text-pink-400 font-semibold mb-3 mt-8 text-center">My Mission</h2>
            <p className="mb-4 text-pink-400 text-md text-center">
              To redesign mental healthcare with lived experience at the center—
              ensuring patients have the tools, knowledge, and autonomy they
              need to navigate care on their terms. <br />
              <br />
              I believe in:
            </p>
            <ul className="list-disc list-inside text-md text-pink-400 px-4 space-y-2">
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
            <p className="mb-4 text-pink-400 text-center text-md italic">
            <br /> Mental healthcare should feel human. That means building spaces where people are seen, not pathologized; supported, not silenced. I believe in systems that honor the full complexity of people’s lives—where healing isn’t a privilege, but a right. My mission is to help redesign these systems from the inside out. <br />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
