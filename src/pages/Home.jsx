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
    <div className="bg-powderBlue-200 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-12 px-4 mt-8 text-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-pulseSlow"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
        <div className="absolute inset-0 bg-white/20 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold"
          >
            This is why I held on. It’s time to rebuild & reclaim.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl font-bold"
          >
            
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl italic mt-4"
          >
            Challenging the system that tried to break me -  <br/> 
            because redesigning it is the best revenge.
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center gap-6 transition-all duration-300"
        >
          <img
            src={profilePic}
            alt="Cam Abbott headshot"
            className="w-48 h-48 rounded-md shadow-lg border-2 border-white hover:grayscale-0 hover:rotate-1 transition duration-300"
          />
          <div>
  <h2 className="text-2xl text-cherry-400 font-bold mb-1 hover:underline">
    Cam Abbott (they/he)
  </h2>
  <p className="text-lg text-gray-700 mb-1">
    Strategist | Advocate | Survivor
  </p>
  <p className="italic text-sm text-gray-500 mb-4">
    I don’t just study the system—I’ve survived it.
  </p>
  <div className="flex gap-4">
    <button className="bg-cherry-400 text-black px-4 py-2 rounded-full font-medium hover:scale-105 hover:shadow-xl hover:bg-white transition-all duration-300">
      About Cam
    </button>
    <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-powderBlue-400 hover:text-black transition">
      Let’s Connect
    </button>
  </div>
</div>

        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
        >
        
          <p className="text-gray-800 mb-2">
  <span className="font-semibold text-cherry-600">What do I do?</span><br />
  I rethink broken systems using strategy, lived experience,  <br /> and radical honesty.
</p>
<p className="text-gray-800 mb-2">
  <span className="font-semibold text-cherry-600">Why does it matter?</span><br />
  Because I’ve survived the failures of the mental healthcare system— <br /> and I’m committed to building something better.
</p>
<p className="text-gray-800">
  <span className="font-semibold text-cherry-600">What’s next?</span><br />
  I’m building tools and frameworks to make healing possible—  <br /> for everyone the system leaves behind.
</p>

        </motion.div>
      </section>

      {/* Stats + Image Section */}
      <section className="max-w-6xl mx-auto px-4 py-4 mb-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-10"
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
              desc: 'Surviving what wasn’t built for us—redesigning what’s next.',
            },
          ].map((item) => (
            <div key={item.stat} className="grid grid-cols-6 items-start gap-4 group hover:bg-pink-50 p-2 rounded-lg transition">
              <h3 className="col-span-1 text-5xl font-extrabold text-cherry-400 text-shadow-dark pink text-right group-hover:scale-105 transition">
                {item.stat}
              </h3>
              <div className="col-span-5">
                <p className="font-extrabold text-lg text-cherry-400">{item.label}</p>
                <p className="italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.img
          src={buildImage}
          alt="Build what you wish had existed"
          className="rounded-lg shadow-4xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6 }}
        />
      </section>

       {/* Core Focus Areas Section */}
       <section className="w-full bg-gradient-to-b from-pink-100 to-white text-black py-20 px-6 text-center">
        <motion.h2 className="text-4xl font-bold text-pink-400 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Core Focus Areas
        </motion.h2>
        <p className="max-w-5xl mx-auto mb-12 text-lg">
          I’m here to connect with strategists, researchers, advocates, and disruptors who refuse to accept the status quo. <br />
          If you’re ready to challenge broken systems and build something better, let’s make it happen.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{
            icon: <PiSquaresFourDuotone className="text-5xl text-pink-400 mb-4 mx-auto" />,
            title: "Data Analysis & Insights",
            desc: "Leveraging behavioral data and research to drive mental health strategies that actually work."
          }, {
            icon: <FaHandsHelping className="text-5xl text-pink-400 mb-4 mx-auto" />,
            title: "Patient Experience & Advocacy",
            desc: "Centering lived experiences in mental health frameworks to create systems that truly support people."
          }, {
            icon: <FaTransgender className="text-5xl text-pink-400 mb-4 mx-auto" />,
            title: "LGBTQ+ Mental Health & Inclusion",
            desc: "Building inclusive, affirming systems that meet the needs of queer and marginalized communities."
          }].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md border border-sky-200 hover:shadow-xl hover:scale-[1.01] transition text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {item.icon}
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
