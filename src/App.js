import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./Components/Canvas";
import Reminders from "./Components/Reminders";
import Stats from "./Components/Stats";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await await axios.get(
          `https://perenual.com/api/species-list?key=sk-GA44664cc210e8e325592&hardiness=7&page=1`
        );
        console.log("response from API", response.data);
        const plantsWithImg = response.data.data.filter(
          (p) =>
            p.default_image &&
            p.default_image.original_url !==
              "https://perenual.com/storage/image/upgrade_access.jpg"
        );
        console.log("plants with images", plantsWithImg);
        setData(plantsWithImg);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="holy-grail-grid">
      <header className="header">This will be the navbar</header>
      <div className="canvas-cont">{/* <Canvas plantData={data} /> */}</div>
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
