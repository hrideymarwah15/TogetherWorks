import { useApp } from "./context/AppContext.jsx";
import Navbar from "./components/Navbar.jsx";

import Dump from "./pages/Dump.jsx";
import Vote from "./pages/Vote.jsx";
import Assign from "./pages/Assign.jsx";
import Build from "./pages/Build.jsx";
import Score from "./pages/Score.jsx";

export default function App() {
  const { stage } = useApp();

  const Page =
    stage === 1 ? Dump
    : stage === 2 ? Vote
    : stage === 3 ? Assign
    : stage === 4 ? Build
    : Score;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8">
        <Page />
      </main>
      <footer className="text-center text-xs text-slate-500 py-5 dark:text-slate-500">
        TogetherWorks
      </footer>
    </div>
  );
}
