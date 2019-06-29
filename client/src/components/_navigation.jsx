import React from 'react';
import { Link } from "react-router-dom";
import '../styles/style.css';

export default function Navigation() {
  return (
    <nav className="nav-container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className="nav-link active"
            to="/"
            >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}