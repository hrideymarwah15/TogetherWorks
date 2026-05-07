import { useApp } from "../context/AppContext.jsx";

const STAGES = [
  { id: 1, label: "1 · Dump" },
  { id: 2, label: "2 · Vote" },
  { id: 3, label: "3 · Assign" },
  { id: 4, label: "4 · Build" },
  { id: 5, label: "5 · Score" },
];

export default function Navbar() {
  const { stage, setStage, members, currentMember, setCurrentMember } = useApp();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center gap-4">
        <h1 className="text-xl font-bold text-brand">TogetherWorks</h1>

        <nav className="flex gap-1 flex-1 flex-wrap">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setStage(s.id)}
              className={
                "px-3 py-1.5 rounded-md text-sm font-medium transition " +
                (stage === s.id
                  ? "bg-brand text-white"
                  : "text-slate-600 hover:bg-slate-100")
              }
            >
              {s.label}
            </button>
          ))}
        </nav>

        <label className="text-sm text-slate-500 flex items-center gap-2">
          You:
          <select
            value={currentMember}
            onChange={(e) => setCurrentMember(e.target.value)}
            className="border border-slate-300 rounded px-2 py-1 text-sm"
          >
            {members.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}
