import React, { useEffect, useState } from "react"
import classnames from "classnames";
import front from "../images/front.jpg"


function Card({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    const [cards, setCards] = useState(null)

    const getCardData = async()=> {
        const response = await fetch('./cardData.json');
        const data = await response.json();
        setCards(data);
    }

    useEffect(()=> getCardData(), [])

    return (
        <div
            className={classnames("card", {
                "is-flipped": isFlipped,
                "is-inactive": isInactive
            })}
            onClick={handleClick}
        >
            <div className="card-face card-font-face">
                <img src={front} alt="front of card" />
            </div>
            <div className="card-face card-back-face">
                <img src={card.image} alt="back of card" />
            </div>
        </div>
    );
}

export default Card;