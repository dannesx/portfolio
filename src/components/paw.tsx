const Paw = () => {
  return (
    <span className="grid size-14 place-items-center rounded-2xl border-2 border-ink bg-citrus shadow-hard">
      <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="7" ry="9" fill="#1a120c" />
        <ellipse cx="32" cy="10" rx="7" ry="9" fill="#1a120c" />
        <ellipse cx="48" cy="16" rx="7" ry="9" fill="#1a120c" />
        <ellipse cx="54" cy="32" rx="6" ry="8" fill="#1a120c" />
        <path
          fill="#1a120c"
          d="M34 28c10 1 18 8 17 18-1 9-9 16-19 16-9 0-16-5-19-13-3-8 0-15 6-18 4-2 9-3 15-3z"
        />
      </svg>
    </span>
  )
}

export default Paw
