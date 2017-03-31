import React, { Component } from 'react';
import Header from './Header.js';
import projectData from './data.json';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App fullPage">
        <Header />
        <div className="allProjects">
          <div className="project">
            <p>{projectData.about}</p>
          </div>
          <div className="project">
            <h1>Training</h1>
            <Training where="Udacity" course="Front-End Web Developer Nanodegree" />
            <Training where="Coursera" course="Object Orientated Programming in Java" />
            <Training where="Coursera" course="Data Structures and Performance" />
            <Training where="Coursera" course="Advanced Data Structures in Java" />
            <Training where="Coursera" course="Machine Learning Foundations" />
          </div>
        </div>
      </div>
    );
  }
}

class Training extends Component {
  render() {
    return (
      <div className="training">
        <p>{this.props.where}</p>
        <p>{this.props.course}</p>
      </div>
    )
  }
}

export default About;