// src/components/Resources/SectionQueer.jsx
import React from "react";
import QueerImage from "../../assets/Resources/resources-queer.jpg";


export default function SectionQueer() {
  return (
    <section id="queer" className="py-20 px-6 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Queer & Trans Mental Health Resources</h2>
            <p className="text-zinc-300 mt-2">
              Access affirming mental health care, peer support, and community resources specifically for LGBTQ+ individuals.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Trans Lifeline</p>
              <p className="text-sm text-zinc-400">
                A grassroots, peer-support crisis hotline and microgrants organization run by and for trans people. They
                provide emotional and financial support to trans people in crisis.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                Website
              </button>
            </div>

            <div>
              <p className="font-semibold">The Trevor Project</p>
              <p className="text-sm text-zinc-400">
                A leading organization providing crisis intervention and suicide prevention services to LGBTQ+ youth under 25.
                They offer 24/7 text, chat, and phone support.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                Website
              </button>
            </div>

            <div>
              <p className="font-semibold">LGBT National Help Center</p>
              <p className="text-sm text-zinc-400">
                Provides free and confidential peer-support, information, and resources for LGBTQ+ individuals of all ages,
                including a youth talkline, senior hotline, and general LGBT helpline.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                Website
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-300">
        <img src={QueerImage} alt="Queer Mental Health Resources" className="w-full h-full object-cover rounded-xl" />  
      </div>
      </div>  

      <div className="mt-12 text-right">
  <a href="#top" className="text-sm text-pink-400 hover:underline">
    ↑ Back to top
  </a>
</div>

    </section>
  );
}
