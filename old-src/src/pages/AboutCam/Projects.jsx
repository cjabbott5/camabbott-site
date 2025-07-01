import React from "react";
import { motion } from "framer-motion";
import WelcomeFront from "../../assets/MyWork/WelcomePackage-front.png";
import WelcomeBack from "../../assets/MyWork/WelcomePackage-back.png";
import Scorecard from "../../assets/MyWork/BalancedScorecard.png";
import MedFront from "../../assets/MyWork/MedTracker-front.png";
import MedBack from "../../assets/MyWork/MedTracker-back.png";
import PsychFront from "../../assets/MyWork/PsychMeds-front.png";
import PsychBack from "../../assets/MyWork/PsychMeds-back.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section className="py-12 px-4 bg-sky-100">
      <motion.div
        className="max-w-screen-lg mx-auto text-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
       <motion.div
  className="bg-white mt-2 mb-8 py-4 rounded-2xl shadow-md max-w-6xl mx-auto"
  variants={fadeUp}
>
  <motion.h2 className="text-4xl font-bold text-cherry-600 mt-4 mb-4" variants={fadeUp}>
    My Work
  </motion.h2>
  <motion.p
    className="text-xl text-cherry-600 mb-4 max-w-4xl mx-auto"
    variants={fadeUp}
  >
    I create trauma-informed resources, strategic frameworks, and practical tools that support both providers and patients navigating mental health care.
  </motion.p>
</motion.div>


        <motion.h3
          className="text-2xl font-semibold text-zinc-800 mb-4"
          variants={fadeUp}
        >
          For Hospitals & Mental Health Providers
        </motion.h3>

        <div className="grid gap-6 md:grid-cols-2 mb-12 text-left">
          <motion.div
            className="bg-pink-100 rounded-2xl shadow p-6"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative w-[240px] h-[320px] mb-4 mx-auto">
              <motion.img
                src={WelcomeBack}
                alt="Hospital Welcome Back"
                className="absolute top-4 left-8 w-11/12 rounded shadow-md"
                whileHover={{ rotate: -1, y: -3 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <motion.img
                src={WelcomeFront}
                alt="Hospital Welcome Front"
                className="absolute top-0 left-0 w-11/12 rounded shadow-lg"
                whileHover={{ rotate: 1, y: -3 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              50-Page Hospitalization Guide & Welcome Package
            </h4>
            <p className="text-zinc-700 text-sm">
              A trauma-informed, customizable welcome resource that helps psychiatric patients understand their stay, rights, treatment options, and how to advocate for themselves.
            </p>
          </motion.div>

          <motion.div
            className="bg-pink-100 rounded-2xl shadow p-6"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={Scorecard}
              alt="Psychiatric Hospital Balanced Scorecard"
              className="w-full rounded mt-12 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              Psychiatric Hospital Balanced Scorecard
            </h4>
            <p className="text-zinc-700 text-sm">
            A performance tool for psychiatric hospitals that centers behavioral health realities. Tracks care quality, staff health, and patient autonomy to drive systemic reform.
            </p>
          </motion.div>
        </div>

        <motion.h3 className="text-2xl font-semibold text-zinc-800 mb-4" variants={fadeUp}>
          For Patients & Individuals Navigating Mental Health
        </motion.h3>

        <div className="grid gap-6 md:grid-cols-2 mb-12 text-left">
          <motion.div
            className="bg-pink-100 rounded-2xl shadow p-6"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative h-48 w-full mb-4">
              <motion.img
                src={MedBack}
                alt="Medication Tracker Back"
                className="absolute top-12 left-10 w-11/12 rounded shadow-md"
                whileHover={{ rotate: -2, y: -2 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <motion.img
                src={MedFront}
                alt="Medication Tracker Front"
                className="absolute top-0 left-0 w-11/12 rounded shadow-lg"
                whileHover={{ rotate: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              Medication Tracker Template
            </h4>
            <p className="text-zinc-700 text-sm">
              A downloadable Google Sheets tool for tracking medications, side effects, and dosage schedules—designed for autonomy and continuity of care.
            </p>
          </motion.div>

          <motion.div
            className="bg-pink-100 rounded-2xl shadow p-6"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative w-[320px] h-[200px] mb-4 mx-auto overflow-hidden">
              <motion.img
                src={PsychBack}
                alt="Mental Health Guide Back"
                className="absolute top-4 left-8 w-full rounded shadow-md"
                whileHover={{ rotate: -1, y: -3 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <motion.img
                src={PsychFront}
                alt="Mental Health Guide Front"
                className="absolute top-0 right-8 w-full rounded shadow-lg"
                whileHover={{ rotate: 1, y: -3 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              Mental Health Guides
            </h4>
            <p className="text-zinc-700 text-sm">
              Practical, evidence-based resources to support self-advocacy and navigation through complex systems. Built from lived experience and research.
            </p>
          </motion.div>
        </div>

        <motion.div className="bg-white rounded-2xl shadow p-6 text-center" variants={fadeUp}>
          <h3 className="text-2xl font-bold text-pink-600 mb-4">
            Opportunities for Collaboration
          </h3>
          <p className="text-zinc-700 text-lg mb-6 max-w-4xl mx-auto">
            If you’re interested in any of the work I’ve shared—whether it’s co-developing resources, sharing research, or reimagining mental health systems—please don’t hesitate to reach out.
          </p>
          <motion.button
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Collaborate with Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
