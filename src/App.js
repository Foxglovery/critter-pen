import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./Components/Canvas";
import Reminders from "./Components/Reminders";
import Stats from "./Components/Stats";
import Wordle from "./Components/Wordle/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  const [solvedSolutions, setSolvedSolutions] = useState("");
  const [wholeSolution, setWholeSolution] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/solutions")
      .then((res) => res.json())
      .then((json) => {
        let randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
        setWholeSolution(randomSolution);
      });
  }, [setSolution]);

  const fetchNewSolution = () => {
    fetch("http://localhost:3000/solutions")
      .then((res) => res.json())
      .then((json) => {
        let randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
        setWholeSolution(randomSolution);
      });
  };

  return (
    <div className="holy-grail-grid">
      <header className="header">This will be the navbar</header>
      <div className="wordle-cont">
        <h1>Wordle (Lingo)</h1>

        {solution && (
          <Wordle
            solution={solution}
            wholeSolution={wholeSolution}
            solvedSolutions={solvedSolutions}
            setSolvedSolutions={setSolvedSolutions}
            fetchNewSolution={fetchNewSolution}
          />
        )}
      </div>
      <section className="left-sidebar">
        <Stats />
      </section>
      {/* these can be removed */}

      <aside className="right-sidebar">
        <Reminders />
      </aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
