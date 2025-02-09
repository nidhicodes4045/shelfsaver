import React from 'react';
import '../App.css';


function ItemCard({item}) {
  return(
    <div className="item-card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{padding: '10px', width: '40%'}}>
      <div style={{
        border: '2px solid white',
        borderRadius: '0.5rem',
        padding: '10px',
      }}>
        <p>{item.name}</p>
        <h3>{item.quantity} - {item.price}</h3>
        <h3>Expires {item.expiration}</h3>
        <h3>Sold by {item.seller}</h3>
        <h3>{item.address}</h3>
      </div>
    </div>
  );
}

export default ItemCard;