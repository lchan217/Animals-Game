import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <li><Link to='/instructions' exact>Instructions</Link></li>
      <li><Link to='/users/highscores' exact>High Scores</Link></li>
      <li><Link to='/users/cards' exact>User Cards</Link></li>
      <li><Link to='/animals/all' exact>All Animals</Link></li>
      <li><Link to='/animals/breeding' exact>Breeding Animals</Link></li>
      <li><Link to='/animals/endangered' exact>Endangered Animals</Link></li>
      <li><Link to='/animals/wild' exact>Wild Animals</Link></li>
    </div>
  );
};

export default NavBar;
