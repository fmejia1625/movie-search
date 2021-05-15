import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    display: 'flex', 
    justifyContent: 'space-around',
  }

  return (
    <div>
      <nav>
        <Link to = "/">
        <h3>Movie Search Home</h3>
        </Link>

        <ul style={navStyle}>
          <Link to = "/search-movies">
            <li>Search Movies</li>
          </Link>
          &nbsp;
          &nbsp;
          &nbsp;


        </ul>
      </nav>
    </div>
  );
}

export default Nav;