import React from "react";
import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, SetCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'green, b: 'yellow'}
  //format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]

  const formatGuess = () => {
    // spread the solution into an array of chars
    // spread and then map into a new array the keys and colors
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });
    // console.log("solutionArray", solutionArray);
    // console.log("formattedGuess", formattedGuess);
    // find the green letter: for each letter and index
    // set matches to null to avoid recoloring during the for each callback
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    //find yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };
  // add a new guess to the guesses state
  //update the isCorrect state if the guess is correct
  //add one to the turn state
  // call the function to add
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];

        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }
        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[l.color] = "grey";
          return;
        }
      });
      return newKeys;
    });
    SetCurrentGuess("");
  };

  // handle keyup event and track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("guesses exhausted");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you've been here before");
        return;
      }
      // the word must be 5 chars long
      if (currentGuess.length !== 5) {
        console.log("5 is the magic number");
        return;
      }
      const formatted = formatGuess();
      // console.log("formatted", formatted);
      addNewGuess(formatted);
    }
    if (key === "Backspace") {
      SetCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    //regex is used here like witchcraft
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        SetCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  // you can just return state like this and components can import and retrieve
  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
    setIsCorrect,
  };
};

export default useWordle;
