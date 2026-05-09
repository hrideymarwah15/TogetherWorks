import { useApp } from "../context/AppContext.jsx";

const STAGES = [
  { id: 1, label: "Dump" },
  { id: 2, label: "Vote" },
  { id: 3, label: "Assign" },
  { id: 4, label: "Build" },
  { id: 5, label: "Score" },
];

export default function Navbar() {
  const {
    stage,
    setStage,
    members,
    currentMember,
    setCurrentMember,
    theme,
    toggleTheme,
  } = useApp();

  return (
    <header className="bg-white/95 border-b border-stone-200 sticky top-0 z-10 backdrop-blur dark:bg-slate-950/90 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setStage(1)}
          className="flex items-center gap-2 text-left"
          aria-label="Go to Stage 1"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand text-white font-bold shadow-sm">
            T
          </span>
          <span>
            <span className="block text-lg font-bold text-slate-950 leading-tight dark:text-white">
              TogetherWorks
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              Team project flow
            </span>
          </span>
        </button>

        <nav className="flex gap-1 flex-1 flex-wrap justify-start lg:justify-center">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setStage(s.id)}
              className={
                "px-3 py-2 rounded-lg text-sm font-medium transition " +
                (stage === s.id
                  ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                  : "text-slate-600 hover:bg-stone-100 dark:text-slate-300 dark:hover:bg-slate-900")
              }
            >
              <span className="text-xs opacity-60">{s.id}</span> {s.label}
            </button>
          ))}
        </nav>

        <label className="text-sm text-slate-500 flex items-center gap-2 dark:text-slate-400">
          <span>You</span>
          <select
            value={currentMember}
            onChange={(e) => setCurrentMember(e.target.value)}
            className="border border-stone-300 bg-white text-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
          >
            {members.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={toggleTheme}
          className="border border-stone-300 bg-white text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-stone-100 transition dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
