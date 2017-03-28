import React, { Component } from 'react';
import Header from './Header.js';
import projectData from './data.json';
import MediaQuery from 'react-responsive';
import './App.css';

class Projects extends Component {
  render() {
    let data = projectData.projects;
    return (
      <div className="App">
        <Header />
        <Project title={data.Apteligent.name} url={data.Apteligent.github} description={data.Apteligent.description} images={["./images/Apteligent/image-1.png", "./images/Apteligent/image-2.png", "./images/Apteligent/image-3.png", "./images/Apteligent/image-4.png", "./images/Apteligent/image-5.png", "./images/Apteligent/image-6.png", "./images/Apteligent/image-7.png"]} />
        <Project title={data.Trip.name} url={data.Trip.github} description={data.Trip.description} images={["./images/Trip/image-1.jpg", "./images/Trip/image-2.jpg", "./images/Trip/image-3.jpg", "./images/Trip/image-4.jpg", "./images/Trip/image-5.jpg", "./images/Trip/image-6.jpg", "./images/Trip/image-7.jpg", "./images/Trip/image-8.jpg", "./images/Trip/image-9.jpg", "./images/Trip/image-10.jpg"]} />
        <Project title={data.Sorting.name} url={data.Sorting.github} description={data.Sorting.description} />
        <Project title={data.Weather.name} url={data.Weather.github} description={data.Weather.description} images={["./images/Weather/image-1.png", "./images/Weather/image-2.png"]} />
      </div>
    );
  }
}

class Project extends Component {

  displayStaticImages(){
    var key = 0;
    var images = [];
    this.props.images.map(function(image){ 
      images.push(<img className="projectImageMain" src={require(image)} alt={"Project"} key={key} />)
      key++;
    })
    return images;
  }

  showImages(){
    if(this.props.images && this.props.images.length > 2){
      return  <ImageCarousel images={this.props.images} />
    }else if(this.props.images && this.props.images.length <= 2){
      return <div className="projectImagesPlain">
              {this.displayStaticImages()}
            </div>
    }
  }

  render(){
    return (
      <div className="project">
        <h1>{this.props.title}</h1>
        <a href={this.props.url}  target="_blank">Github Repo</a>
        <p>{this.props.description}</p>
        {this.showImages()}
      </div>
    )
  }
}

class ImageCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      leftImage: this.props.images.length-1,
      middleImage: 0,
      rightImage: 1
    };
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeftSingle = this.clickLeft.bind(this);
    this.clickRightSingle = this.clickRight.bind(this);
  };

  checkStateLeft(state){
    if(state === this.props.images.length-1){
      return 0
    }else{
      return ++state;
    }
  }

  checkStateRight(state){
    if(state === 0){
      return this.props.images.length-1
    }else{
      return --state;
    }
  }

  checkStateLeftSingle(state){
    if(state === 0){
      return this.props.images.length-1
    }else{
      return --state;
    }
  };

  checkStateRightSingle(state){
    if(state === this.props.images.length-1){
      return 0
    }else{
      return ++state;
    }
  };

  clickLeft(){
    this.setState({
      leftImage: this.checkStateLeftSingle(this.state.leftImage),
      middleImage: this.checkStateLeftSingle(this.state.middleImage),
      rightImage: this.checkStateLeftSingle(this.state.rightImage)
    })
  };

  clickRight(){
    this.setState({
      leftImage: this.checkStateRightSingle(this.state.leftImage),
      middleImage: this.checkStateRightSingle(this.state.middleImage),
      rightImage: this.checkStateRightSingle(this.state.rightImage)
    })
  };

  clickLeftSingle(){
    this.setState({
      leftImage: this.checkStateLeft(this.state.leftImage),
      middleImage: this.checkStateLeft(this.state.middleImage),
      rightImage: this.checkStateLeft(this.state.rightImage)
    })
  };

  clickRightSingle(){
    this.setState({
      leftImage: this.checkStateRight(this.state.leftImage),
      middleImage: this.checkStateRight(this.state.middleImage),
      rightImage: this.checkStateRight(this.state.rightImage)
    })
  };


  clickRightSingle(){
    if(this.state.middleImage === this.props.images.length-1){
      this.setState({
        middleImage: 0
      })
    }else{
      this.setState({
        middleImage: ++this.state.middleImage
      })
    }
  };

  render(){
    return(
      <div>
        <MediaQuery minWidth={870}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeft}></i>
              <img className="projectImageSide" src={require(this.props.images[this.state.leftImage])} alt={"Project"} />
              <img className="projectImageMain" src={require(this.props.images[this.state.middleImage])} alt={"Project"} />
              <img className="projectImageSide" src={require(this.props.images[this.state.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={870} minWidth={670}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeft}></i>
              <img className="projectImageSideMedium" src={require(this.props.images[this.state.leftImage])} alt={"Project"} />
              <img className="projectImageMainMedium" src={require(this.props.images[this.state.middleImage])} alt={"Project"} />
              <img className="projectImageSideMedium" src={require(this.props.images[this.state.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={670} minWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="projectImageMain" src={require(this.props.images[this.state.middleImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="projectImageMainSmall" src={require(this.props.images[this.state.middleImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Projects;