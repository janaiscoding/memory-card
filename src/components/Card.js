//You also need a couple of cards that display images and possibly informational text.
//There should be a function that displays the cards in a random order anytime a user clicks one.
// on click -> shuffle (Be sure to invoke that function when the component mounts.)
import React, { useState } from "react";
import cards from "./cards";
import CardItem from "./CardItem";
import "../styles/cards.css";

const Cards = () => {
  const [cardSet, setCards] = useState(cards);
  const handleClick = (id) => {
    setCards((prevState) => {
      const changedCards = prevState.map((cardItem) => {
        if (cardItem.id === id) {
          return { ...cardItem, isClicked: true };
        }
        return cardItem;
      });
      return changedCards;
    });
  };
  const allCards = cardSet.map((cardItem) => (
    <CardItem
      key={cardItem.id}
      id={cardItem.id}
      cardItem={cardItem}
      onClick={handleClick}
    />
  ));
  return <>{allCards}</>;
};

export default Cards;
