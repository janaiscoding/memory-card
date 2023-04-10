import React from "react";

const CardItem = ({ id, cardItem, onClick }) => {
  return (
    <>
      <div className="card-wrap" key={id} onClick={() => onClick(id)}>
        <div className="name">{cardItem.name}</div>
        <img src={cardItem.img} alt="game card"></img>
        <p className="description"> {cardItem.description} </p>
        <p className="isClicked">{cardItem.isClicked ? "true" : "false"}</p>
      </div>
    </>
  );
};

export default CardItem;
