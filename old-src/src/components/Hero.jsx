import fireBg from '../assets/fire-bg.jpeg'
import camProfile from '../assets/cam-profile.jpg' // Replace with your actual image filename

export default function Hero() {
  return (
    <section className="relative text-white text-center md:text-left overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={fireBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-300 leading-tight mb-4">
            Survival isn’t enough.<br />
            It’s time to rebuild & reclaim.
          </h1>
          <p className="italic text-lg text-pink-100">
            Challenging the system that tried to break me—because redesigning it is the best revenge.
          </p>
        </div>
        <div className="hidden md:block md:w-1/3">
          <img
            src={camProfile}
            alt="Cam Abbott"
            className="rounded-md shadow-xl object-cover w-60 h-60 mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
