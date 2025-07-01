import React from "react"
import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="bg-pink-200 min-h-screen px-6 py-20 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Column: Text + Image Placeholder */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Rebuild with Me</h1>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-black text-2xl" />
              <p className="text-lg text-gray-800">
                Mental healthcare needs bold ideas and real change. If you're ready to rethink the system, let's talk.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-80 bg-zinc-900 rounded-xl flex items-center justify-center text-white text-lg italic">
            [ Contact Image Placeholder ]
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Your First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-black rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Your Email Address*</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full border border-black rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Your Message*</label>
              <textarea
                required
                placeholder="Enter your message here"
                className="w-full border border-sky-400 text-black rounded-md px-4 py-2 h-32 resize-none focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-pink-400 transition duration-300"
            >
              Submit Your Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
