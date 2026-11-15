import skills from "@/data/skills.json"

const Row = ({ hidden = false }: { hidden?: boolean }) => {
  return (
    <ul className="flex items-center" aria-hidden={hidden}>
      {skills.ticker.map((item) => (
        <li key={`${hidden ? "b" : "a"}-${item}`} className="flex items-center">
          <span className="px-2 font-mono text-[13px] font-medium uppercase tracking-[0.14em]">
            {item}
          </span>
          <span className="text-pop" aria-hidden="true">
            ★
          </span>
        </li>
      ))}
    </ul>
  )
}

const Ticker = () => {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink text-sun" aria-hidden="true">
      <div className="flex w-max animate-ticker py-3 motion-reduce:animate-none">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </div>
  )
}

export default Ticker
