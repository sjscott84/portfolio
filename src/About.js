import React, { Component } from 'react';
import Header from './Header.js';
import projectData from './data.json';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App fullPage">
        <Header />
        <div className="aboutMeText">
          <p>{projectData.about}</p>
        </div>
      </div>
    );
  }
}

export default About;