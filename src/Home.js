import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={require("./images/me.jpg")} alt="Sarah" className="photo" />
        <h1 className="intro-header">Hello,</h1>
        <p className="intro">
          I'm Sarah and I like exploring code, from front-end to neural networks.  Why don't you take a look at what I have been up to?
        </p>
        <div className="listOfCatagories">
          <h1 className="catagories"><Link to="/projects">Projects</Link></h1>
          <h1 className="catagories"><Link to="/study">Study</Link></h1>
          <h1 className="catagories"><Link to="/reading">Reading</Link></h1>
        </div>
      </div>
    );
  }
}

export default Home;
