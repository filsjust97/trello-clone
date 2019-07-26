import React from "react";
import TrelloCard from "./TrelloCard";
import "./TrelloList.css";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards, listID }) => {
    return (
        <div className="container">
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card._id} text={card.text} />
            ))}
            <TrelloActionButton listID={listID} />
        </div>
    )
}

export default TrelloList;
