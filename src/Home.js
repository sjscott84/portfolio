import React, { Component } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <div className="homePage">
          <img src={require("./images/me.jpg")} alt="Sarah" className="photo" />
          <h1 className="intro-header">Hello</h1>
          <p className="intro">
            I'm Sarah and I am a self taught developer who loves exploring and experimenting with code.  Why don't you take a look at what I have been up to?
          </p>
          <p className="project-link"><Link to="/projects">Projects</Link></p>
        </div>
      </div>
    );
  }
}

export default Home;
