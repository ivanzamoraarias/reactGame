import React, { Component } from 'react';
import Card from './Card';


const CardList = (props) => {
  return(
      <div>
        {props.cards.map(card => <Card key={card.key} {...card}/>)}
      </div>
  );
};
export default CardList;