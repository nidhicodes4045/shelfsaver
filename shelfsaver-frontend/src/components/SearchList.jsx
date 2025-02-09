import React from 'react';
import ItemCard from './ItemCard';


function SearchList({ filteredItems, incrementCartCount }) {
  const filtered = filteredItems.map(item =>  <ItemCard key={item.id} item={item} incrementCartCount={incrementCartCount} />); 
  return (
      <div className="search-list-container" style={{
  	display: 'flex',
  	flexWrap: 'wrap',
  	justifyContent: 'space-around'
	}}>
      {filtered}
    </div>
  );
}

export default SearchList;