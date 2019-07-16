import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li><Link to="/" exact>Home(Delete later because you only need name once)</Link></li>
      <li><Link to="/instructions" exact>Instructions</Link></li>
      <li><Link to="/users" exact>User List (Delete later)</Link></li>
      <li><Link to="/animals" exact>All Animals</Link></li>
      <li><Link to="/breeding" exact>Breeding Animals</Link></li>
      <li><Link to="/endangered" exact>Endangered Animals</Link></li>
      <li><Link to="/wild" exact>Wild Animals</Link></li>
    </div>
  );
};

export default NavBar;
