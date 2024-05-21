import "./App.css";
import Canvas from "./Components/Canvas";
import Reminders from "./Components/Reminders";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="holy-grail-grid">
      <header className="header">This will be the navbar</header>
      <div className="canvas-cont">
        <Canvas />
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
