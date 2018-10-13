import React from 'react';

const Card = props => {
  const styleBoxes = {
    width: '132px',
    height: '132px',
    borderRadius: '10px',
    border: 'solid 3px dimgray',
    margin: '5px',
    display: 'inline-block',
    backgroundColor: 'dimgray'
  }

  return (<div style={styleBoxes} onClick={() => props.onClick} />);
};

export default Card;