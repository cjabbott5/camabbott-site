// src/pages/Essays/HospitalWelcome.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/Essays/essays-brain.jpeg";
import WelcomeFront from "../../assets/MyWork/WelcomePackage-front.png";
import WelcomeBack from "../../assets/MyWork/WelcomePackage-back.png";
import {
  MdVolunteerActivism,
  MdHourglassBottom,
  MdStarOutline,
  MdGavel,
  MdChecklist,
  MdChatBubbleOutline,
  MdHelpOutline,
  MdSentimentDissatisfied,
} from "react-icons/md";

export default function HospitalWelcome() {
  return (
    <main className="bg-white text-zinc-800">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-24 px-6 text-white"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-2"
          >
            Hospital Welcome Package for Psychiatric Patients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-4"
          >
            Discover the hospital welcome package—a vital patient education tool
            for navigating psychiatric care with clarity, dignity, and support.
          </motion.p>
          <p className="text-sm opacity-80">Cam Abbott · 3/8/2025 · 3 min read</p>
        </div>
      </section>

      {/* Problem Intro */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-2 items-center"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={WelcomeFront}
          alt="Hospital Welcome Package cover"
          className="w-64 h-auto border border-black rounded shadow-xl justify-self-center"
        />
        <div className="space-y-4">
          <p>
            Psychiatric hospitalization can be overwhelming, isolating, and confusing—especially for those admitted unexpectedly. Many patients struggle to understand why they are hospitalized, their rights, and what happens next. Without structured guidance, hospitalization can feel more like punishment than care.
          </p>
          <p>
            To address this, I developed the <strong>Hospital Welcome Package</strong>, a 50-page education and advocacy guide designed to help psychiatric patients navigate hospitalization with confidence and clarity.
          </p>
          <p className="font-semibold text-pink-600">
            This resource empowers patients, reduces staff burden, and improves hospital compliance with patient education standards.
          </p>
        </div>
      </motion.section>

      {/* Challenges */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-zinc-100 py-16 px-6"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-2xl font-bold text-center">
            The Challenges of Psychiatric Hospitalization
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[{
              icon: MdChatBubbleOutline,
              title: "Lack of Clear Communication",
              points: [
                "Little explanation about hospitalization or treatment.",
                "Confusion around admission, discharge, and treatment options."
              ]
            }, {
              icon: MdHelpOutline,
              title: "Uncertainty Around Rights & Discharge",
              points: [
                "Unclear legal protections or ability to refuse treatment.",
                "Patients often feel powerless."
              ]
            }, {
              icon: MdSentimentDissatisfied,
              title: "Emotional Distress & Isolation",
              points: [
                "Limited access to support networks.",
                "Increased anxiety, depression, helplessness."
              ]
            }].map(({ icon: Icon, title, points }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-16 h-16 mx-auto text-zinc-600 mb-2" />
                <h3 className="font-bold mb-2">{title}</h3>
                <ul className="text-sm text-zinc-700 space-y-1">
                  {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Package Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-50 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <ul className="list-disc mt-10 pl-6 space-y-6 text-pink-600 text-lg">
            <li><strong>Understanding Hospitalization:</strong> Admission type, what to expect</li>
            <li><strong>Your Rights:</strong> Refusal of treatment, discharge requests</li>
            <li><strong>Navigating Hospital Life:</strong> Rules, conflicts, accommodations</li>
            <li><strong>Treatment Education: </strong>Medication, side effects, options</li>
            <li><strong>Planning for Discharge:</strong> Practical next steps</li>
          </ul>
          <div className="flex flex-row gap-4 justify-center items-start flex-wrap">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={WelcomeFront}
              alt="Front of the Hospital Welcome Package"
              className="w-64 h-auto rounded shadow-md"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={WelcomeBack}
              alt="Back of the Hospital Welcome Package"
              className="w-60 h-auto rounded shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-2xl font-bold text-center">Why This Resource Matters</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center text-sm text-zinc-700">
            {[{
              icon: MdVolunteerActivism,
              title: "Empowers Patients",
              desc: "Reduces anxiety and confusion."
            }, {
              icon: MdHourglassBottom,
              title: "Reduces Staff Burden",
              desc: "Fewer repetitive questions."
            }, {
              icon: MdStarOutline,
              title: "Improves Satisfaction",
              desc: "Higher HCAHPS scores and treatment adherence."
            }, {
              icon: MdGavel,
              title: "Ensures Compliance",
              desc: "Meets legal/ethical education standards."
            }].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-20 h-20 mx-auto text-pink-600 mb-2" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-pink-200 to-pink-100 py-16 px-6"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">How You Can Get Involved</h2>
          <p>
            Are you a hospital administrator, mental health professional, or patient advocate? <br /> I'm gathering feedback to refine this resource.
          </p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-lg font-semibold flex justify-center items-center gap-2"
          >
            <MdChecklist className="w-5 h-5 text-pink-700" />
            <a href="#" className="underline text-pink-700">Take the Survey</a>
          </motion.p>
          <p className="text-sm">
            Interested in a preview or collaboration? Contact me at{" "}
            <a href="mailto:camabbott5@gmail.com" className="underline">camabbott5@gmail.com</a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-md text-zinc-500">
        Psychiatric hospitalization shouldn’t feel like punishment. With the right tools, patients can advocate for their needs and navigate care with dignity.
      </footer>
    </main>
  );
}
