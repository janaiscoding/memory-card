import React from "react";

const CardItem = ({ id, cardItem, onClick }) => {
  return (
    <>
      <div className="card-wrap" key={id} onClick={() => onClick(id)}>
        <div className="name">{cardItem.name}</div>
        <img src={cardItem.img} alt="game card" width={150} height={150}></img>
        <p className="description"> {cardItem.description} </p>
      </div>
    </>
  );
};

export default CardItem;
