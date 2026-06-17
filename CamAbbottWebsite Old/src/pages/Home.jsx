// src/pages/Home.jsx
import React from 'react';
import background from '../assets/hero-bg-new.png';
import profilePic from '../assets/cam-profile.jpg';
import buildImage from '../assets/build-what-you-wish.png';
import { motion } from 'framer-motion';
import { PiSquaresFourDuotone } from 'react-icons/pi';
import { FaHandsHelping, FaTransgender } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-background text-text-primary font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-6 mt-4 overflow-hidden">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-background" />
        {/* Subtle background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.20),transparent)]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            This is why I held on. It’s time to rebuild & reclaim.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary/90 mt-3 leading-relaxed"
          >
            Challenging the system that tried to break me —
            <br className="hidden md:block" />
            <span className="text-text-secondary">
              because healing and rebuilding are the most radical forms of resistance.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-background-light/70 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 flex items-center gap-6 shadow-lg transition-all"
        >
          <img
            src={profilePic}
            alt="Cam Abbott headshot"
            className="w-44 h-44 object-cover rounded-lg shadow-xl border border-slate-600"
          />
          <div>
            <h2 className="text-2xl font-bold mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-violet to-accent-pink">
                Cam Abbott (they/he)
              </span>
            </h2>
            <p className="text-base text-text-secondary mb-1">
              Strategist • Advocate • Survivor
            </p>
            <p className="italic text-sm text-text-muted mb-5">
              I don’t just study the system — I’ve survived it.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-accent-violet/80 hover:bg-accent-violet transition shadow-lg">
                Read My Story
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-accent-sky/60 hover:text-accent-sky transition">
                Let’s Connect
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">What do I do?</span><br />
            I rethink broken systems using strategy, lived experience, and radical honesty.
          </p>
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">Why does it matter?</span><br />
            Because I’ve survived the failures of the mental healthcare system — and I’m committed to building something better.
          </p>
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">What’s next?</span><br />
            I’m building tools and frameworks to make healing possible — for everyone the system leaves behind.
          </p>
        </motion.div>
      </section>

      {/* Stats + Image Section */}
      <section className="max-w-6xl mx-auto px-6 pb-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              stat: '4+',
              label: 'Years Consulting Experience',
              desc: 'Breaking down systems to rebuild them with purpose.',
            },
            {
              stat: '8+',
              label: 'Client Engagements Across Multiple Industries',
              desc: 'Transforming healthcare, media, and government strategy.',
            },
            {
              stat: '10+',
              label: 'Years Navigating the Mental Healthcare System',
              desc: 'Surviving what wasn’t built for us — redesigning what’s next.',
            },
          ].map((item) => (
            <div
              key={item.stat}
              className="grid grid-cols-6 items-start gap-4 rounded-xl border border-slate-800 bg-background-light/50 p-3 hover:border-accent-sky/40 transition"
            >
              <h3 className="col-span-1 text-5xl font-extrabold text-accent-sky text-right">
                {item.stat}
              </h3>
              <div className="col-span-5">
                <p className="font-semibold text-lg">{item.label}</p>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.img
          src={buildImage}
          alt="Build what you wish had existed"
          className="rounded-xl border border-slate-800 shadow-xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Core Focus Areas Section */}
      <section className="w-full bg-background-muted/40 border-t border-slate-800 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Core Focus Areas
        </motion.h2>
        <p className="max-w-5xl mx-auto mb-12 text-text-secondary">
          I’m here to connect with strategists, researchers, advocates, and disruptors who refuse to accept the status quo.
          <br className="hidden md:block" />
          If you’re ready to challenge broken systems and build something better, let’s make it happen.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <PiSquaresFourDuotone className="text-4xl text-accent-sky mb-4 mx-auto" />,
              title: 'Data Analysis & Insights',
              desc: 'Leveraging behavioral data and research to drive mental health strategies that actually work.',
            },
            {
              icon: <FaHandsHelping className="text-4xl text-accent-sky mb-4 mx-auto" />,
              title: 'Patient Experience & Advocacy',
              desc: 'Centering lived experiences in mental health frameworks to create systems that truly support people.',
            },
            {
              icon: <FaTransgender className="text-4xl text-accent-sky mb-4 mx-auto" />,
              title: 'LGBTQ+ Mental Health & Inclusion',
              desc: 'Building inclusive, affirming systems that meet the needs of queer and marginalized communities.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-background-light/60 border border-slate-800 text-left shadow-lg hover:border-accent-violet/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {item.icon}
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
