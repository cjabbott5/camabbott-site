// components/ui/Card.jsx
export default function Card({ title, description, children }) {
    return (
      <div className="bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        {description && <p className="text-zinc-400 mb-4">{description}</p>}
        {children}
      </div>
    )
  }
  