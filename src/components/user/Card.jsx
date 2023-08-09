import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ imageUrl, buttonText, type }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card__image" />
      <button
        className="card__button"
        onClick={() => {
          navigate("/user/view-securities/" + type);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
