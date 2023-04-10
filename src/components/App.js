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
            console.log("yes", cardItem.id, "score", score, "best", bestScore);
            setScore(score + 1);
            //increment score + shuffle cards
            return { ...cardItem, isClicked: true };
          } else {
            //set best score. set score from 0
            if (score > bestScore) {
              setBestScore(score);
            }
            setScore(0);
            //shuffle table reset all card items
            console.log("no", cardItem.id, "score", score, "best", bestScore);
          }
        }
        return cardItem;
      });
      console.log(score);
      return changedCards;
    });
  };

  return (
    <>
      <Cards cardSet={cardSet} onClick={handleClick} />
    </>
  );
};
export default App;
