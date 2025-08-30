import React from "react";
import EssayCard from "../../components/EssayCard";

// Importing images
import heroImg from "../../assets/Essays/essays-hero.png";
import queerImg from "../../assets/Essays/essays-queer.jpg";
import brainImg from "../../assets/Essays/essays-brain.jpeg";
import futureImg from "../../assets/Essays/essays-future.jpg";

// Essay card data
const essays = [
  {
    image: queerImg,
    title: "Queer, Trans, and Navigating Psychiatric Care",
    summary:
      "Exploring the stark differences between inpatient and partial hospitalization programs for queer and trans individuals. Discussing systemic barriers, costs, and the need for inclusive care.",
    date: "3/9/2025",
    readTime: "2 min",
    link: "/essays/queer-psych-care", // <-- Add this
  },
  {
    image: brainImg,
    title: "Hospital Welcome Package for Psychiatric Patients",
    summary:
      "A structured tool for enhancing patient education and empowering individuals to understand their hospitalization, advocate for themselves, and feel less alone.",
    date: "3/8/2025",
    readTime: "3 min",
    link: "/essays/hospital-welcome", 
  },
  {
    image: futureImg,
    title: "We Deserve More: Rethinking Mental Healthcare for Real Healing",
    summary:
      "Why the mental healthcare system fails—and how we can reimagine it to center dignity, autonomy, and real healing.",
    date: "2/21/2025",
    readTime: "4 min",
    link: "/essays/healthcare-reform",
  },
];

export default function Essays() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold leading-tight">
              Writing to Rebuild: <br />
              <span className="text-pink-400">Strategy, Survival & Systemic Change</span>
            </h1>
            <p className="text-lg italic text-zinc-300">
              Mental healthcare wasn't built for us – but through data, research, and lived experience, 
              we can create something better. Here, I explore the failures of the system, the power of 
              patient-led strategy, and the pathways to real change.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={heroImg} alt="Burning paper" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-gray-800">
        <p>
          Welcome to my collection of essays and insights on mental health advocacy, lived experience, 
          and systemic change. Here, I explore the complexities of navigating the mental healthcare system, 
          the intersections of identity and mental health, and the urgent need for reform.
        </p>
        <p>
          As someone who has personally experienced psychiatric hospitalization, bipolar disorder, and the 
          challenges of accessing effective care, I write from both a deeply personal and strategic perspective. 
          My goal is to shed light on the realities of the mental health system—its flaws, its potential for 
          transformation, and the ways we can push for better policies, patient rights, and community-driven solutions.
        </p>
        <div>
          <h2 className="text-xl font-semibold">These essays cover a range of topics, including:</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Surviving the Mental Healthcare System</strong> – Hospitalization, misdiagnosis, self-advocacy.</li>
            <li><strong>Queer & Trans Mental Health</strong> – LGBTQ+ challenges and resilience in psychiatric care.</li>
            <li><strong>Mental Health Policy & Reform</strong> – Breaking barriers and reimagining patient care.</li>
            <li><strong>Bipolar Disorder & Recovery</strong> – Strategies for stability, growth, and self-acceptance.</li>
          </ul>
        </div>
        <p>
          I believe that storytelling is one of the most powerful tools for advocacy. By sharing experiences—
          both my own and those of others—I hope to foster dialogue, challenge outdated narratives, and inspire 
          real change.
        </p>
      </section>

      {/* Essay Cards */}
      <section className="bg-zinc-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {essays.map((essay, idx) => (
            <EssayCard key={idx} {...essay} />
          ))}
        </div>
      </section>
    </main>
  );
}
