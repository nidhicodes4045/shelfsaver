import React from 'react';

function ItemCard({item}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{item.name}</h2>
        <p>{item.address}</p>
      </div>
    </div>
  );
}

export default ItemCard;