export default function SeedOfLife({ className = '', opacity = 0.6 }) {
  return (
    <>
      <style>{`@keyframes camSpin{to{transform:rotate(360deg)}}`}</style>
      <svg
        viewBox="0 0 240 240"
        className={className}
        aria-hidden="true"
        style={{ animation: 'camSpin 90s linear infinite', transformOrigin: 'center' }}
      >
        <g fill="none" stroke="#FCF6F2" strokeWidth="1.25" opacity={opacity}>
          <circle cx="120" cy="120" r="40" />
          <circle cx="160" cy="120" r="40" />
          <circle cx="140" cy="154.64" r="40" />
          <circle cx="100" cy="154.64" r="40" />
          <circle cx="80" cy="120" r="40" />
          <circle cx="100" cy="85.36" r="40" />
          <circle cx="140" cy="85.36" r="40" />
        </g>
      </svg>
    </>
  )
}