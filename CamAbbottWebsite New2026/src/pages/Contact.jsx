export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-7 py-24 text-center">
      <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Contact</p>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mt-4 mb-5">Get in touch</h1>
      <div className="spectrum h-1 w-full max-w-[160px] rounded-full mx-auto mb-8" />
      <p className="text-lg text-ink-soft mb-8">For collaboration, speaking, press, or to ask about the Hospital Welcome Package — reach out.</p>
      <a href="mailto:hello@camabbott.com" className="inline-block font-semibold px-6 py-3 rounded-full bg-brand-orange text-white hover:bg-brand-orange-deep transition">Email me</a>
      <div className="flex gap-5 justify-center mt-7 font-mono text-[0.78rem] uppercase tracking-wide text-ink-soft">
        <a href="#" className="hover:text-ink">LinkedIn</a>
        <a href="#" className="hover:text-ink">TikTok</a>
      </div>
    </div>
  )
}