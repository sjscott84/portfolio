import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  displayHome(){
    if(location.pathname !== "/"){
      return <p className="header-text"><Link to="/">Home</Link></p>
    }else{
      return <p className="header-text"><Link to="/projects">Projects</Link></p>
    }
  }
  render() {
    return (
      <div className="header">
        <div className="headerLinks">
          {this.displayHome()}
          <p className="header-text"><Link to="/about">About Me</Link></p>
          <p className="header-text"><Link to="/contact">Contact</Link></p>
        </div>
        <svg className="svgLine">
          <line x1={1} y1={1} x2={1000} y2={1} className="line" />
        </svg>
      </div>
    );
  }
}
export default Header;