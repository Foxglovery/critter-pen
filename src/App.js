import "./App.css";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <div className="holy-grail-grid">
      <header className="header">Header</header>
      <Canvas />
      <section className="left-sidebar">Left sidebar</section>
      <aside className="right-sidebar">Right sidebar</aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
