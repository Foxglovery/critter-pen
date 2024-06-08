import React, { useEffect, useState } from "react";
import styles from "./Styles/Stats.module.css";
import axios from "axios";
export default function Stats() {
  const [funds, setFunds] = useState(4);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await await axios.get(
  //         `https://perenual.com/api/species-list?key=sk-GA44664cc210e8e325592&hardiness=7&page=1`
  //       );
  //       console.log("response from API", response.data);
  //       const plantsWithImg = response.data.data.filter(
  //         (p) =>
  //           p.default_image &&
  //           p.default_image.original_url !==
  //             "https://perenual.com/storage/image/upgrade_access.jpg"
  //       );
  //       console.log("plants with images", plantsWithImg);
  //       setData(plantsWithImg);
  //     } catch (error) {
  //       console.log("Error fetching data", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <main className={styles["stat-container"]}>
      <section className={styles["stat-el"]}>
        Funds: ${funds}
        <button>Add Free Money</button>
      </section>
      <h2>Available Plants</h2>
      {/* {Array.isArray(data) && data.length > 0 ? (
        data.map((p, index) => (
          <div key={index}>
            <p>{p.common_name}</p>
            <img src={p.default_image?.thumbnail} alt={p.common_name} />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )} */}
    </main>
  );
}
