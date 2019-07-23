import React from 'react';
import { Link } from 'react-router-dom';

// <div className="item"><Link to='/animals/breeding' exact>Breeding Animals</Link></div>
// <div className="item"><Link to='/animals/endangered' exact>Endangered Animals</Link></div>
// <div className="item"><Link to='/animals/wild' exact>Wild Animals</Link></div>

const NavBar = () => {
  return (
    <div className='ui tabular menu'>
      <div className="item"><Link to='/' exact>Instructions</Link></div>
      <div className="item"><Link to='/animals' exact>All Animals</Link></div>
      <div className="item"><Link to='/data' exact>Record Score</Link></div>
      <div className="item"><Link to='/users/highscores' exact>High Scores</Link></div>
      <div className="item"><Link to='/users/cards' exact>User Cards</Link></div>
    </div>
  );
};

export default NavBar;
