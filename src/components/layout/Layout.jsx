// components/layout/Layout.jsx
import Header from './Header'
import Footer from './Footer'
import Thread from "@/components/visuals/AnimatedThreads";
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
      
      {/* Animated background thread with isolation */}
     <div className="absolute inset-0 -z-10">
 <div className="overflow-hidden border-2 border-red-500">
  <Thread />
</div>
</div>

      {/* Sticky Header stays on top */}
      <div className="sticky top-0 relative z-20">
        <Header />
      </div>

      {/* Main content with animation */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow px-6 py-12 lg:px-8 relative z-10"
      >
        {children}
      </motion.main>

      {/* Footer stays on bottom */}
      <Footer />
    </div>
  );
}
