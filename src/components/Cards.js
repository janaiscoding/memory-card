//You also need a couple of cards that display images and possibly informational text.
//There should be a function that displays the cards in a random order anytime a user clicks one.
// on click -> shuffle (Be sure to invoke that function when the component mounts.)
import React from "react";
import CardItem from "./CardItem";

const Cards = ({ cardSet, onClick }) => {
  const allCards = cardSet.map((cardItem) => (
    <CardItem
      key={cardItem.id}
      id={cardItem.id}
      cardItem={cardItem}
      onClick={onClick}
    />
  ));
  return <div className="main">{allCards}</div>;
};

export default Cards;
