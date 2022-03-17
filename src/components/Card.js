import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <img className="list__img" src="/testImg.jpg" alt="pix" />
      <p className="card__title"> Title</p>
    </div>
  );
};

export default Card;
