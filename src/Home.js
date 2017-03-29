import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <img src={require("./images/me.jpg")} alt="Sarah" className="photo" />
        <h1 className="intro-header">Hello</h1>
        <p className="intro">
          I'm Sarah and I am a self taught developer who loves exploring and experimenting with code.  Why don't you take a look at what I have been up to?
        </p>
      </div>
    );
  }
}

export default Home;
