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

  return (
    <section>
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Stage 5 · Score</h2>
        <p className="text-slate-500 text-sm">
          Rate your teammates and see the team ranking update as scores land.
        </p>
      </header>

      {peers.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
          <p className="text-slate-500">Add teammates before scoring.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {peers.map((member) => (
            <MemberCard key={member} memberName={member} />
          ))}
        </div>
      )}

      <section className="mt-8 bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">Ranking</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">Member</th>
                <th className="px-4 py-3 font-semibold">Average</th>
                <th className="px-4 py-3 font-semibold">Submissions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rankings.map((row, index) => (
                <tr key={row.member}>
                  <td className="px-4 py-3 font-medium text-slate-800">
                    <span className="inline-flex items-center gap-2">
                      {hasScores && index === 0 && <span>🏆</span>}
                      {row.member}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {row.count === 0 ? "No scores yet" : row.average.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-slate-500">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
