import React, { useState } from "react";
import data from "./data";
import Cards from "./Cards";

const App = () => {
  const [cardSet, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (id) => {
    setCards((prevState) => {
      const changedCards = prevState.map((cardItem) => {
        if (cardItem.id === id) {
          if (!cardItem.isClicked) {
            //increment score
            setScore(score + 1);
            // shuffle cards -- HOW TO DO THIS
            return { ...cardItem, isClicked: true };
          } else if (cardItem.isClicked) {
            console.log("score, bestScore", score, bestScore);
            //card has the is clicked true so i will check best score now
            if (score > bestScore) {
              setBestScore(score);
              setScore(0);
            }
            //always reset the score back to 1
            setScore(0);
            //shuffle table reset all card items
            resetCards();
            console.log("no", cardItem.id, "score", score, "best", bestScore);
          }
        }
        return cardItem;
      });
      return changedCards;
    });
  };

  //this sets all isclicked to false again
  const resetCards = () => {
    setCards((prevState) => {
      const cleanCards = prevState.map((cardItem) => {
        return { ...cardItem, isClicked: false };
      });
      return cleanCards;
    });
  };
  return (
    <>
      <Cards cardSet={cardSet} onClick={handleClick} />
      <div>score: {score}</div>
      <div>best score: {bestScore}</div>
    </>
  );
};
export default App;
