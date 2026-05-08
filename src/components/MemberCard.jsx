import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";

const CRITERIA = [
  { key: "contribution", label: "Contribution" },
  { key: "timeliness", label: "Timeliness" },
  { key: "collaboration", label: "Collaboration" },
];

export default function MemberCard({ memberName }) {
  const { setScores } = useApp();
  const [ratings, setRatings] = useState({
    contribution: 5,
    timeliness: 5,
    collaboration: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const average = useMemo(() => {
    const total = CRITERIA.reduce((sum, item) => sum + ratings[item.key], 0);
    return Number((total / CRITERIA.length).toFixed(1));
  }, [ratings]);

  const updateRating = (key, value) => {
    setRatings((prev) => ({ ...prev, [key]: Number(value) }));
    setSubmitted(false);
  };

  const submitScore = () => {
    setScores((prev) => ({
      ...prev,
      [memberName]: [...(prev[memberName] || []), average],
    }));
    setSubmitted(true);
  };

  return (
    <article className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="font-semibold text-slate-800">{memberName}</h3>
          <p className="text-xs text-slate-400">Peer score</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-brand">{average}</p>
          <p className="text-xs text-slate-400">average</p>
        </div>
      </div>

      <div className="space-y-4">
        {CRITERIA.map((item) => (
          <label key={item.key} className="block">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-sm font-medium text-slate-700">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                {ratings[item.key]}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={ratings[item.key]}
              onChange={(e) => updateRating(item.key, e.target.value)}
              className="w-full accent-brand"
            />
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={submitScore}
        className="mt-5 w-full bg-brand text-white px-4 py-2 rounded font-medium hover:opacity-90"
      >
        {submitted ? "Score submitted" : "Submit score"}
      </button>
    </article>
  );
}
