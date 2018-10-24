import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Character</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
