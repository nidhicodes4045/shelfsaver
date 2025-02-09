import React, { useState } from 'react';
import SearchList from './SearchList';
import '../assets/styles/UserPage.css';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredItems = details.filter(
    item => {
      return (
        item
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <SearchList filteredItems={filteredItems} />
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search Items</h2>
      </div>
      <div className="pa2">
        <section>
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search for an item"
          onChange={handleChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </section>
      </div>
		<br />
      {searchList()}
    </section>
  );
}

export default Search;
