import React from "react";
import { Link } from "react-router-dom";

export function NavBar({ setdisplay }) {
  return (
    <header className="nav-bar">
      <div className="container">
        <ul className="flex menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addItem">Add Item</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
