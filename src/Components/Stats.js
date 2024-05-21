import React, { useEffect, useState } from "react";
import styles from "./Styles/Stats.module.css";
import axios from "axios";
export default function Stats() {
  const [funds, setFunds] = useState(4);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await await axios.get(
          `https://perenual.com/api/species-list?key=sk-GA44664cc210e8e325592`
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={styles["stat-container"]}>
      <section className={styles["stat-el"]}>
        Funds: ${funds}
        <button>Add Free Money</button>
      </section>
      <h2>Available Plants</h2>
    </main>
  );
}
