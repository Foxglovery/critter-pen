import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import { Keypad } from "./Keypad";
import Modal from "./Modal";

export default function Wordle({
  solution,
  wholeSolution,
  solvedSolutions,
  setSolvedSolutions,
  fetchNewSolution,
}) {
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    setIsCorrect,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  // I think the change in refreshing needs to occur here
  /**
   * useEffect hook that adds an event listener for keyup events and removes it when the component unmounts.
   * It also checks if the condition isCorrect is true or if the turn is greater than 5, and shows a modal after a delay of 2000ms.
   * @param {function} handleKeyup - The event handler function for keyup events.
   * @param {boolean} isCorrect - A boolean value indicating if the condition is correct.
   * @param {number} turn - The current turn number.
   */
  useEffect(() => {
    // Add event listener for keyup events
    window.addEventListener("keyup", handleKeyup);

    // OKAY, this refetches a new solution and flips isCorrect but it doesnt affect the keyboard yet
    if (isCorrect) {
      setSolvedSolutions((prevSolutions) => [...prevSolutions, solution]);
      fetchNewSolution();
      setIsCorrect(!isCorrect);

      setTimeout(() => setShowModal(true), 2000);

      // Remove event listener for keyup events
      window.removeEventListener("keyup", handleKeyup);
    }

    // Show modal after a delay of 2000ms if turn is greater than 5
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      // Remove event listener for keyup events
      window.removeEventListener("keyup", handleKeyup);
    }

    // Cleanup function that removes the event listener for keyup events when the component unmounts
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <div> solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {/* will need to undo modal display and allow game to reset without page refresh */}
      {/* {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )} */}
    </div>
  );
}
