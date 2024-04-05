import "./App.css";
import Canvas from "./Components/Canvas";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="holy-grail-grid">
      <header className="header">Header</header>
      <div className="canvas-cont">
        <Canvas />
      </div>
      <section className="left-sidebar">
        <Stats />
      </section>
      {/* these can be removed */}
      <stat-el>this is also tezt</stat-el>
      <stat-container>this is also text</stat-container>
      <aside className="right-sidebar">Right sidebar</aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
