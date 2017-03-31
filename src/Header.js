import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  displayProject(){
    if(location.pathname !== "/projects"){
      return <p className="header-text"><Link to="/projects">Projects</Link></p>
    }else{
      return <p className="header-text"><Link to="/">Home</Link></p>
    }
  };
  displayAbout(){
    if(location.pathname !== "/about"){
      return <p className="header-text"><Link to="/about">About Me</Link></p>
    }else{
      return <p className="header-text"><Link to="/">Home</Link></p>
    }
  };
  displayContact(){
    if(location.pathname !== "/contact"){
      return <p className="header-text"><Link to="/contact">Contact</Link></p>
    }else{
      return <p className="header-text"><Link to="/">Home</Link></p>
    }
  };
  render() {
    return (
      <div className="header">
        <div className="headerLinks">
          {this.displayProject()}
          {this.displayAbout()}
          {this.displayContact()}
        </div>
        <svg className="svgLine">
          <line x1={1} y1={1} x2={5000} y2={1} className="line" />
        </svg>
      </div>
    );
  }
}
export default Header;