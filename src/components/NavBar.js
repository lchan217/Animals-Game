import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className='navBar'>
      <Menu widths={5}>
        <Menu.Item>
          <Link to='/'>Instructions</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/animals'>All Animals</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/data'>Record Score</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/users/highscores'>High Scores</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/users/cards'>User Cards</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
