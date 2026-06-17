export default function Footer() {
  return (
    <footer className="bg-brand-plum text-[#b7a4b0]">
      <div className="max-w-6xl mx-auto px-7 py-7 flex flex-wrap justify-between items-center gap-3 text-[0.84rem]">
        <div className="font-display font-extrabold text-white text-base">
          Cam<span className="text-brand-orange">.</span>Abbott
        </div>
        <div>A personal advocacy project · Views are my own · © {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}