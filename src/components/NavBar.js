import React from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';

const NavBar = () => {
  return (
    <div className='ui tabular menu'>
      <div className="item"><Link to='/' exact>New Game</Link></div>
      <div className="item"><Link to='/users/cards' exact>User Cards</Link></div>
      <div className="item"><Link to='/users/highscores' exact>High Scores</Link></div>
      <div className="item"><Link to='/animals/instructions' exact>Instructions</Link></div>
      <div className="item"><Link to='/animals/all' exact>All Animals</Link></div>
      <div className="item"><Link to='/animals/breeding' exact>Breeding Animals</Link></div>
      <div className="item"><Link to='/animals/endangered' exact>Endangered Animals</Link></div>
      <div className="item"><Link to='/animals/wild' exact>Wild Animals</Link></div>
      <div className="item"><b><Timer /></b></div>
    </div>
  );
};

export default NavBar;
