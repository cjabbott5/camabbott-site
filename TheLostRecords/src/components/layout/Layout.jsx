// components/layout/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import Thread from '../visuals/AnimatedThreads';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-base text-ink flex flex-col">
      {/* Ambient scroll thread (fixed, behind content, non-interactive) */}
      <Thread />

      {/* Sticky header (Header handles its own stickiness) */}
      <Header />

      {/* Main content — horizontal padding flexes with viewport */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-grow px-4 sm:px-6 lg:px-8 py-6 sm:py-10"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}