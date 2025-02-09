import React from 'react';
import ItemCard from './ItemCard';

function SearchList({ filteredItems }) {
  const filtered = filteredItems.map(item =>  <ItemCard key={item.id} item={item} />); 
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