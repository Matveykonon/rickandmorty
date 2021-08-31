import React from 'react';
import './index.css';

const renderCards = arr => {
  return arr.map(card => {
    return (
      <div className="CharacterCard" key={card.id}>
        <img src={card.image} alt={`Pic of ${card.name} is not available`}/>
        <p>{card.name}</p>
      </div>
    )
  })
};

const ContentList = ({ content }) => {
  
  return (
    <div className="ContentList">
      {!!content ? renderCards(content) : <span>Nothing found...</span>}
    </div>
  );
};

export default ContentList;
