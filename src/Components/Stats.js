import React, { useState } from "react";
import styles from "./Styles/Stats.module.css";
export default function Stats() {
  const [funds, setFunds] = useState(4);

  return (
    <main className={styles["stat-container"]}>
      <section className={styles["stat-el"]}>
        Funds: ${funds}
        <button>Add Free Money</button>
      </section>
    </main>
  );
}
