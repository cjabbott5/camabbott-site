// components/ui/Section.jsx
import { motion } from 'framer-motion'

export default function Section({ title, description, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {title && <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>}
      {description && <p className="text-zinc-400 mb-4">{description}</p>}
      {children}
    </motion.section>
  )
}
