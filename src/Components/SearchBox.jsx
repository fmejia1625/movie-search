import React from 'react';

function SearchBox(props) {
  return (
    <div>
      <input placeholder='Type to search'value = {props.value}
      onChange = {(event)=> props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;