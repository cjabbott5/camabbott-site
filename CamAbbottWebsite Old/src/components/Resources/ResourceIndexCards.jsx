import React from "react";

export default function ResourceIndexCards() {
  const sections = [
    { id: "queer", label: "Queer & Trans Mental Health Resources" },
    { id: "meds", label: "Medication & Treatment Guides" },
    { id: "guides", label: "Mental Health Guides & Toolkits" },
    { id: "navigation", label: "Self-Advocacy & System Navigation" },
    { id: "peer", label: "Community & Peer Support" },
    { id: "crisis", label: "Crisis & Support Hotlines" },
  ];

  return (
    <section className="py-12 px-6 bg-zinc-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-zinc-200 text-center"
          >
            <p className="font-bold text-zinc-800 text-lg">{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
