export default function Footer() {
  return (
    <footer className="bg-soft text-grayText text-center py-6 text-sm space-y-2">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <span>Built with:</span>
        <span className="font-medium">React</span>
        <span>·</span>
        <span className="font-medium">Vite</span>
        <span>·</span>
        <span className="font-medium">Tailwind CSS</span>

        {/* Optional logos */}
        {/* 
        <img src="/react-logo.svg" alt="React" className="h-4 w-4" />
        <img src="/vite-logo.svg" alt="Vite" className="h-4 w-4" />
        <img src="/tailwind-logo.svg" alt="Tailwind CSS" className="h-4 w-4" />
        */}
      </div>
      <div>© {new Date().getFullYear()} Cam Abbott · All rights reserved</div>
    </footer>
  );
}
