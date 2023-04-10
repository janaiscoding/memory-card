import React, { useState } from "react";
import data from "./data";
import Cards from "./Cards";

const App = () => {
  const [cardSet, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
  };
  const handleBest = () => {
    let currentScore = score;
    if (currentScore > bestScore) {
      setBestScore(() => currentScore);
    }
  };
  const handleClick = (id) => {
    shuffleCards(cardSet);
    setCards((prevState) => {
      const changedCards = prevState.map((cardItem) => {
        if (cardItem.id === id) {
          if (!cardItem.isClicked) {
            handleScore();
            return { ...cardItem, isClicked: true };
          } else if (cardItem.isClicked) {
            handleBest();
            setScore(0);
            resetCards();
          }
        }
        return cardItem;
      });
      return changedCards;
    });
  };
  const shuffleCards = (cardSet) => {
    for (let i = cardSet.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [cardSet[randomIdx], cardSet[i]] = [cardSet[i], cardSet[randomIdx]];
    }
  };

  const resetCards = () => {
    setCards((prevState) => {
      const cleanCards = prevState.map((cardItem) => {
        return { ...cardItem, isClicked: false };
      });
      return cleanCards;
    });
  };

  return (
    <div className="game">
      <div className="info">Get points by clicking on a peepo but don't click on any more than once!</div>
      <div className="score-wrap">
        <div className="score">Score: {score}</div>
        <div className="best-score">Best Score: {bestScore}</div>
      </div>
      <Cards cardSet={cardSet} onClick={handleClick} />
    </div>
  );
};
export default App;
