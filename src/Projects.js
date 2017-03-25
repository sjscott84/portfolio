import React, { Component } from 'react';
import Header from './Header.js';
import projectData from './data.json';
import './App.css';

class Projects extends Component {
  render() {
    let data = projectData.projects;
    return (
      <div className="App">
        <Header />
        <Project title={data.Apteligent.name} url={data.Apteligent.github} description={data.Apteligent.description} images={["./images/Apteligent/image-1.png", "./images/Apteligent/image-2.png", "./images/Apteligent/image-3.png", "./images/Apteligent/image-4.png", "./images/Apteligent/image-5.png", "./images/Apteligent/image-6.png", "./images/Apteligent/image-7.png"]} />
        <Project title={data.Trip.name} url={data.Trip.github} description={data.Trip.description} images={["./images/Trip/image-1.jpg", "./images/Trip/image-2.jpg", "./images/Trip/image-3.jpg", "./images/Trip/image-4.jpg", "./images/Trip/image-5.jpg", "./images/Trip/image-6.jpg", "./images/Trip/image-7.jpg", "./images/Trip/image-8.jpg", "./images/Trip/image-9.jpg", "./images/Trip/image-10.jpg"]} />
      </div>
    );
  }
}

class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0
    };
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  };

  clickLeft(){
    if(this.state.index === 0){ 
      this.setState({
        index: this.props.images.length-1
      })
    }else{
      this.setState({
        index: --this.state.index
      })
    }
  };

  clickRight(){
    if(this.state.index === this.props.images.length-1){ 
      this.setState({
        index: 0
      })
    }else{
      this.setState({
        index: ++this.state.index
      })
    }
  };

  render(){
    return (
      <div className="project">
        <h1>{this.props.title}</h1>
        <a href={this.props.url}  target="_blank">Github Repo</a>
        <p>{this.props.description}</p>
        <div className="projectImages">
          <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeft}></i>
            <img className="projectImage" src={require(this.props.images[this.state.index])} alt={"Project"} />
          <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRight}></i>
        </div>
      </div>
    )
  }
}

export default Projects;