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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <Page />
      </main>
      <footer className="text-center text-xs text-slate-400 py-4">
        TogetherWorks
      </footer>
    </div>
  );
}
