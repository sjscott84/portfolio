import React, { Component } from 'react';
import Header from './Header.js';
import projectData from './data.json';
import MediaQuery from 'react-responsive';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="allProjects">
          <div className="project">
            <p>{projectData.about}</p>
          </div>
          <div className="project">
            <h1>Training</h1>
            <Training where="Udacity" course="Front-End Web Developer Nanodegree" url="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" />
            <Training where="Coursera" course="Object Orientated Programming in Java" url="https://www.coursera.org/learn/object-oriented-java" />
            <Training where="Coursera" course="Data Structures and Performance" url="https://www.coursera.org/learn/data-structures-optimizing-performance"/>
            <Training where="Coursera" course="Advanced Data Structures in Java" url="https://www.coursera.org/learn/advanced-data-structures" />
            <Training where="Coursera" course="Machine Learning Foundations" url="https://www.coursera.org/learn/ml-foundations" />
            <div>
              <MediaQuery minWidth={500}>
                <div className="training">
                  <p>Code School</p>
                  <p>Various courses, see report card <a href="https://www.codeschool.com/users/sjscott84" target="_blank">here</a></p>
                </div>
              </MediaQuery>
              <MediaQuery maxWidth={500}>
                <div className="trainingSmall">
                  <p>Code School</p>
                  <p>Various courses, see report card <a href="https://www.codeschool.com/users/sjscott84" target="_blank">here</a></p>
                </div>
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Training extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={500}>
          <div className="training">
            <p>{this.props.where}</p>
            <a href={this.props.url} target="_blank">{this.props.course}</a>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="trainingSmall">
            <p>{this.props.where}</p>
            <a href={this.props.url} target="_blank">{this.props.course}</a>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default About;