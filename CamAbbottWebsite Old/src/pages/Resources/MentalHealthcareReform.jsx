import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function MentalHealthcareReform() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          The U.S. Mental Healthcare System Was Built This Way
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-gray-300"
        >
          What we see today — overcrowded psych wards, impossible waitlists, dehumanizing treatment, and sky-high costs — is not a glitch. It’s the result of a system designed without the people it claims to serve: patients.
        </motion.p>
      </section>

      {/* System is Failing */}
      <section className="bg-white text-black px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">The System Is Failing</h2>
          <p>
            Psychiatric units are supposed to be where we go to get better. So why do so many people leave them more traumatized than when they entered?
          </p>
          <p>
            Treatment often means sedation, not support. Monitoring, but not listening. Stabilization — maybe — but not empowerment. Over 70% of people with mental illness report being mistreated or dehumanized during inpatient stays<sup><a href="https://www.thenationalcouncil.org/resources/understanding-the-mental-health-crisis/" target="_blank" className="text-blue-600 underline">[1]</a></sup>. Many are discharged with no real plan, no continuity of care.
          </p>
          <p>
            Even more concerning? There is almost no public data on the long-term outcomes of psychiatric hospitalization. That’s not just a data gap — that’s a red flag. If we’re not tracking healing, what exactly are we measuring?
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="bg-gray-50 text-black px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">My Story</h2>
          <p>
            In 2024, I was hospitalized. Within days, I lost my home. My cat. My freedom. I also turned 25.
          </p>
          <p>
            I was curled up in a chair in the ER waiting room, trying to sleep, when it happened. Hands — too many, too rough — grabbed me. I screamed: <strong>“Let go of me. Let go of me. I do not consent. I do not consent. Please. Please. Please.”</strong>
          </p>
          <p>
            I was pushed onto a gurney and tied down. My body stopped resisting before my fear did. But even inside that locked ward, I wasn’t alone.
          </p>
          <p>
            Patients advocate for each other. We speak up, we soothe, we share snacks and stories and warnings. We are the only ones who understand what it's like to be inside — and to still choose to care.
          </p>
          <p>
            Even at my worst, I was taking notes. Watching patterns. Fighting for others when I could barely speak for myself. Because the system didn’t scare me as much as silence did.
          </p>
        </div>
      </section>

      {/* Built This Way */}
      <section className="bg-white text-black px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">It Was Built This Way</h2>
          <p>
            Mental illness has never been treated neutrally in this country. Historically, people were labeled “insane” for being inconvenient — angry women, visible queer people, survivors who didn’t stay silent.
          </p>
          <p>
            Asylums became hospitals. Straightjackets became sedatives. But the logic stayed the same: isolate, control, and dismiss. The modern system still rewards compliance, punishes resistance, and centers whiteness, wealth, and power.
          </p>
          <p>
            This is not a system that has failed. It is a system that has fulfilled its original purpose — and that’s why we must build something entirely new.
          </p>
        </div>
      </section>

      {/* What Real Healing Looks Like */}
      <section className="bg-blue-50 text-black px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">What Real Healing Looks Like</h2>
          <p>
            Healing cannot be coerced. It cannot be standardized. It grows through trust, dignity, and care. Even inside psych wards, healing is possible — but it comes from people, not protocol.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Consent-based care:</strong> Treatment plans should be co-created with patients.</li>
            <li><strong>Education:</strong> Patients should understand their diagnoses, rights, and options.</li>
            <li><strong>Autonomy:</strong> Even in crisis, patients deserve dignity and choice.</li>
            <li><strong>Community support:</strong> Peer care must be acknowledged and protected.</li>
          </ul>
          <p>
            I've seen patients care for each other more fiercely than any system designed for them. We notice what staff miss. We translate pain into connection. That’s what real healing looks like — not control, but community.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-100 text-black px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Let’s Build Something Better</h2>
          <p>
            Hospitals, providers, policymakers: we’re calling you in. Let patients lead. Let survivors shape your systems. Let lived experience count as evidence.
          </p>
          <p>
            If you’re not tracking healing, you’re not practicing healthcare. You’re managing liability.
          </p>
          <p>
            The system wasn’t made for us. But the future can be.
          </p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-black text-white text-lg px-6 py-3 rounded-full">
              Let’s Collaborate
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Citation */}
      <footer className="bg-black text-gray-400 px-6 py-8 text-sm text-center">
        <p>
          [1] National Council for Mental Wellbeing. "Understanding the Mental Health Crisis." <a href="https://www.thenationalcouncil.org/resources/understanding-the-mental-health-crisis/" target="_blank" className="underline">View Source</a>
        </p>
      </footer>
    </div>
  );
}
