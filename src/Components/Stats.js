import React, { useEffect, useState } from "react";
import styles from "./Styles/Stats.module.css";

export default function Stats() {
  const [funds, setFunds] = useState(4);
  const [cursors, setCursors] = useState(0);
  const [cursorCost, setCursorCost] = useState(10);
  const handleClick = (number) => {
    setFunds(funds + number);
  };

  function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if (funds >= cursorCost) {
      setCursors(cursors + 1);
      setFunds(funds - cursorCost);
    }
  }
  window.setInterval(function () {}, 1000);
  return (
    <main className={styles["stat-container"]}>
      <section className={styles["stat-el"]}>
        Funds: ${funds}
        <button onClick={handleClick}>Add Free Money</button>
        <span id="cursors">{cursors}</span>
        <span id="cursorCost">{cursorCost}</span>
      </section>
    </main>
  );
}
