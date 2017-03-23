import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <p className="header-text"><Link to="/about">About Me</Link></p>
          <p className="header-text"><Link to="/contact">Contact</Link></p>
          <p className="header-text"><Link to="/">Home</Link></p>
        </div>
      </div>
    );
  }
}
export default Header;