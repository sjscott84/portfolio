import React, { Component } from 'react';
import Header from './Header.js';
import Projects from './Projects';
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
            I'm Sarah and I am a self taught developer who loves exploring and experimenting with code and this is what I have been up to.
          </p>
          <Projects />
        </div>
      </div>
    );
  }
}

export default Home;
