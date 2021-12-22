import React from "react";
import "./CollectionCard.css";
import weth from "../../assets/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img loading="lazy" src={image} alt="" />
      <div className="collectionCard__details">
        <div className="collectionCard__name">
          {name} <div className="collectionCard__id">#{id}</div>
        </div>

        <div className="collectionCard__priceContainer">
          <img
            loading="lazy"
            src={weth}
            className="collectionCard__wethImage"
            alt=""
          />
          <div className="collectionCard__price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
