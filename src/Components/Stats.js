import React from "react";
import styles from "./Styles/Stats.module.css";
export default function Stats() {
  const startingValue = Math.floor(Math.random() * 4);
  return (
    <main className={styles["stat-container"]}>
      <section className={styles["stat-el"]}>
        Your Current Funds: ${startingValue}
        <button>Add Free Money</button>
      </section>
    </main>
  );
}
