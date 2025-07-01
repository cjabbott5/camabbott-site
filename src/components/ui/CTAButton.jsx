// components/ui/CTAButton.jsx
export default function CTAButton({ label, onClick, href, variant = 'primary' }) {
    const base = 'px-4 py-2 rounded font-medium transition-colors text-sm'
    const styles = {
      primary: 'bg-blue-600 hover:bg-blue-500 text-white',
      secondary: 'bg-zinc-700 hover:bg-zinc-600 text-white',
      ghost: 'bg-transparent hover:bg-zinc-800 text-zinc-300',
    }
  
    if (href) {
      return (
        <a href={href} className={`${base} ${styles[variant]}`}>
          {label}
        </a>
      )
    }
  
    return (
      <button onClick={onClick} className={`${base} ${styles[variant]}`}>
        {label}
      </button>
    )
  }
  