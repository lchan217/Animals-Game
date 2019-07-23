import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className='ui tabular menu'>
        <div className="item"><Link to='/'>Instructions</Link></div>
        <div className="item"><Link to='/animals'>All Animals</Link></div>
        <div className="item"><Link to='/data'>Record Score</Link></div>
        <div className="item"><Link to='/users/highscores'>High Scores</Link></div>
        <div className="item"><Link to='/users/cards'>User Cards</Link></div>
      </div>
    </div>
  );
};

export default NavBar;
