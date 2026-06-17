import React from "react";
import { FaHeart, FaMoneyBillWave, FaHandsHelping } from "react-icons/fa";
import queerImg from "../../assets/Essays/essays-queer.jpg";

export default function QueerPsychCare() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section
  className="relative w-full h-[360px] bg-bottom bg-cover flex items-center justify-center"
  style={{ backgroundImage: `url(${queerImg})` }}
>
  <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
  
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
    <h1 className="text-3xl md:text-4xl font-semibold">
      Queer, Trans, and Navigating Psychiatric Care
    </h1>
    <p className="mt-4 text-md max-w-xl mx-auto">
      Navigating mental healthcare as a queer and trans individual has revealed stark differences
      between inpatient care and partial hospitalization programs. In this essay, I explore both the
      challenges and moments of compassion I’ve experienced, discuss systemic barriers like insurance
      and costs, and advocate for a more inclusive, trauma-informed approach.
    </p>
    <p className="mt-4 text-sm text-gray-300">Cam Abbott · 3/9/2025 · 2 min read</p>
  </div>
</section>


      {/* Essay Content */}
      <article className="max-w-6xl mx-auto px-6 py-16 space-y-14">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-powderBlue-500">What Works, What Doesn’t, and Why</h2>
          <p>
            As a queer and trans person, my mental health journey has taken me through various care settings—
            from inpatient psychiatric units to partial hospitalization programs (PHPs). Each setting has
            provided unique insights, challenges, and, occasionally, unexpected moments of compassion.
          </p>
          <p>
            Here’s what I’ve learned about navigating these systems, the disparities in care, and the barriers
            that still exist for queer and trans individuals.
          </p>
        </section>

        {/* Inpatient Challenges */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-cherry-600">Inpatient Psychiatric Units: Challenges and Realities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold">Lack of Inclusivity</h4>
              <p className="text-sm mt-2">Little awareness or sensitivity toward LGBTQ+ identities, leading to isolation.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold">Restraints & Sedation</h4>
              <p className="text-sm mt-2">Used unnecessarily, making me feel powerless and unsafe.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg shadow">
              <h4 className="font-semibold">Mixed Staff Experiences</h4>
              <p className="text-sm mt-2">Some were kind and helpful, others overwhelmed and reactive.</p>
            </div>
          </div>
        </section>

        {/* PHPs */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-powderBlue-500">PHPs: Why They Worked Better</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="font-bold text-xl text-right text-powderBlue-500">Identity <br /> Affirmation</div>
            <div>Staff created a safe space for queer and trans patients, validating and supporting us.</div>
            <div className="font-bold text-xl text-right text-powderBlue-500">Greater <br /> Autonomy</div>
            <div>PHPs prioritize dignity, choice, and collaborative care that feels personalized.</div>
          </div>
        </section>

        {/* Meaningful Encounter */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-cherry-600">A Meaningful Encounter</h3>
          <p>
            After a frightening encounter during a psychiatric crisis, an ambulance responder brought immediate comfort.
            He engaged me gently—talking about our tattoos, offering a human connection, and calming my panic.
            This reminded me of the transformative power of empathy and simple conversation in healing.
          </p>
        </section>

        {/* Nurses */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-powderBlue-500">Overworked and Underpaid Nurses</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
              <FaHeart className="text-powderBlue-500 text-3xl mb-2" />
              <p>Juggling high patient loads daily, often without breaks.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
              <FaMoneyBillWave className="text-powderBlue-500 text-3xl mb-2" />
              <p>Inadequate compensation for emotional and physical labor.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
              <FaHandsHelping className="text-powderBlue-500 text-3xl mb-2" />
              <p>Often overlooked despite essential care work—especially post-pandemic.</p>
            </div>
          </div>
        </section>

        {/* Financial Barriers */}
        <section className="space-y-6 px-4">
  <h3 className="text-xl font-semibold text-cherry-600">Financial and Insurance Barriers</h3>
  
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 items-start">
    <div className="font-bold text-xl text-cherry-600 md:text-right">Insurance <br /> Limits</div>
    <div>Coverage often restricts type or duration of care, requiring constant justification.</div>
    <div className="font-bold text-xl text-cherry-600 md:text-right">High <br /> Costs</div>
    <div>Out-of-pocket fees create enormous stress during mental health crises.</div>
  </div>
</section>



        {/* Final Reflections */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-powderBlue-500">Final Reflections and Calls for Change</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Positive, affirming care is recognizable</strong> in compassionate programs like PHPs.</li>
            <li><strong>Trauma-informed, identity-affirming care must become standard</strong>, not the exception.</li>
            <li><strong>Improving working conditions for nurses</strong> is essential to patient safety.</li>
            <li><strong>Breaking down insurance and financial barriers</strong> can make mental healthcare accessible.</li>
          </ul>
          <p>
            Our goal should be a mental healthcare system that respects dignity, identity, and autonomy at all levels—
            not just occasionally, but consistently.
          </p>
        </section>
      </article>
    </main>
  );
}
