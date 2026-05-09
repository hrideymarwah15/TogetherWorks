import MemberCard from "../components/MemberCard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function Score() {
  const { members, currentMember, scores } = useApp();
  const peers = members.filter((member) => member !== currentMember);
  const rankings = members
    .map((member) => {
      const memberScores = scores[member] || [];
      const total = memberScores.reduce((sum, score) => sum + score, 0);
      const average = memberScores.length === 0 ? 0 : total / memberScores.length;

      return {
        member,
        average,
        count: memberScores.length,
      };
    })
    .sort((a, b) => b.average - a.average || a.member.localeCompare(b.member));
  const hasScores = rankings.some((row) => row.count > 0);
  const totalSubmissions = rankings.reduce((sum, row) => sum + row.count, 0);

  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-stone-200 pb-5 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-brand dark:text-brand-dark">
            Stage 5
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Score
          </h2>
          <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
            Rate your teammates and see the ranking update as scores land.
          </p>
        </div>
        <span className="w-fit border border-stone-200 bg-white rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {totalSubmissions} {totalSubmissions === 1 ? "score" : "scores"}
        </span>
      </header>

      {peers.length === 0 ? (
        <div className="text-center text-slate-500 bg-white border border-dashed border-stone-300 rounded-lg py-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
          <p>Add teammates before scoring.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {peers.map((member) => (
            <MemberCard key={member} memberName={member} />
          ))}
        </div>
      )}

      <section className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm dark:bg-slate-900 dark:border-slate-800">
        <div className="px-4 py-3 border-b border-stone-200 dark:border-slate-800">
          <h3 className="font-semibold text-slate-950 dark:text-white">Ranking</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 text-left text-xs uppercase text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">Member</th>
                <th className="px-4 py-3 font-semibold">Average</th>
                <th className="px-4 py-3 font-semibold">Submissions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-slate-800">
              {rankings.map((row, index) => (
                <tr key={row.member}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                    <span className="inline-flex items-center gap-2">
                      {hasScores && index === 0 && <span>🏆</span>}
                      {row.member}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                    {row.count === 0 ? "No scores yet" : row.average.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                    {row.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
