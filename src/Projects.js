import React, { Component } from 'react';
import Header from './Header.js';
import ImageComponent from './ImageComponent.js';
import projectData from './data.json';
import './App.css';

class Projects extends Component {
  render() {
    let data = projectData.projects;
    return (
      <div className="App">
        <Header />
        <h4 className="projectIntro">The following are just a few of the projects I have worked on and include personal projects, work and projects produced during different courses. To see a full list of all the projects I have worked on please visit my github repository <a href={'https://github.com/sjscott84'}  target="_blank">here.</a></h4>
        <div className="allProjects">
          <Project title={data.Apteligent.name} what={'app'} url={data.Apteligent.github} description={data.Apteligent.description} demo={'https://www.youtube.com/watch?v=zH6stATO728&feature=youtu.be'} images={["/Apteligent/image-1.png", "/Apteligent/image-2.png", "/Apteligent/image-3.png", "/Apteligent/image-4.png", "/Apteligent/image-5.png", "/Apteligent/image-6.png", "/Apteligent/image-7.png"]} />
          <Project title={data.Trip.name} what={'app'} url={data.Trip.github} description={data.Trip.description} demo={'https://youtu.be/i9NVAeXYu_w'} images={["/Trip/image-1.jpg", "/Trip/image-2.jpg", "/Trip/image-3.jpg", "/Trip/image-4.jpg", "/Trip/image-5.jpg", "/Trip/image-6.jpg", "/Trip/image-7.jpg", "/Trip/image-8.jpg", "/Trip/image-9.jpg", "/Trip/image-10.jpg"]} />
          <Project title={data.Weather.name} what={'app'} url={data.Weather.github} description={data.Weather.description} images={["/Weather/image-1.png", "/Weather/image-2.png"]} />
          <Project title={data.Algorithms.name} what={'notApp'} url={data.Algorithms.github} description={data.Algorithms.description} images={["/Algorithms/image-1.png", "/Algorithms/image-2.png", "/Algorithms/image-3.png", "/Algorithms/image-4.png", "/Algorithms/image-5.png",]} />
          {/*<Project title={data.textEditor.name} what={'notApp'} url={data.textEditor.github} description={data.textEditor.description} images={["/TextEditor/image-1.png", "/TextEditor/image-2.png", "/TextEditor/image-3.png"]} />
          <Project title={data.routeFinder.name} what={'notApp'} url={data.routeFinder.github} description={data.routeFinder.description} images={["/RouteFinder/image-1.png", "/RouteFinder/image-2.png", "/RouteFinder/image-3.png"]} />*/}
        </div>
      </div>
    );
  }
}

class Project extends Component {
  showDemo(){
    if(this.props.demo){
      return <a href={this.props.demo}  target="_blank">App Demo</a>
    }
  }
  render(){
    return (
      <div className="project">
        <h1>{this.props.title}</h1>
        <a href={this.props.url}  target="_blank">Github Repo</a>
        {this.showDemo()}
        <p>{this.props.description}</p>
        <ImageComponent images={this.props.images} what={this.props.what} />
      </div>
    )
  }
}

export default Projects;