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
        <h4 className="projectIntro">The following are just a few of the projects I have worked on and include personal projects, work and projects produced during different courses. To see a full list of all the projects I have worked on please visit my github repository <a href={'https://github.com/sjscott84'}  target="_blank">here.</a></h4>
        <div className="allProjects">
          <Project title={data.Apteligent.name} what={'app'} url={data.Apteligent.github} description={data.Apteligent.description} images={["/Apteligent/image-1.png", "/Apteligent/image-2.png", "/Apteligent/image-3.png", "/Apteligent/image-4.png", "/Apteligent/image-5.png", "/Apteligent/image-6.png", "/Apteligent/image-7.png"]} />
          <Project title={data.Trip.name} what={'app'} url={data.Trip.github} description={data.Trip.description} images={["/Trip/image-1.jpg", "/Trip/image-2.jpg", "/Trip/image-3.jpg", "/Trip/image-4.jpg", "/Trip/image-5.jpg", "/Trip/image-6.jpg", "/Trip/image-7.jpg", "/Trip/image-8.jpg", "/Trip/image-9.jpg", "/Trip/image-10.jpg"]} />
          <Project title={data.Weather.name} what={'app'} url={data.Weather.github} description={data.Weather.description} images={["/Weather/image-1.png", "/Weather/image-2.png"]} />
          <Project title={data.textEditor.name} what={'notApp'} url={data.textEditor.github} description={data.textEditor.description} images={["/TextEditor/image-1.png", "/TextEditor/image-2.png", "/TextEditor/image-3.png"]} />
          <Project title={data.routeFinder.name} what={'notApp'} url={data.routeFinder.github} description={data.routeFinder.description} images={["/RouteFinder/image-1.png", "/RouteFinder/image-2.png", "/RouteFinder/image-3.png"]} />
          <Project title={data.Sorting.name} what={'notApp'} url={data.Sorting.github} description={data.Sorting.description} />
        </div>
      </div>
    );
  }
}

class Project extends Component {

  showImages(){
    if(this.props.what === 'app'){
      if(this.props.images && this.props.images.length > 2){
        return  <ImageCarousel images={this.props.images} />
      }else if(this.props.images && this.props.images.length <= 2){
        return <PlainImage images={this.props.images} />
      }
    }else{
      if(this.props.images){
        return <NonAppImages images={this.props.images} />
      }
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

class PlainImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: 0
    };
    this.checkStateLeftSingle = this.checkStateLeftSingle.bind(this);
    this.checkStateRightSingle = this.checkStateRightSingle.bind(this);
    this.displayStaticImages = this.displayStaticImages.bind(this);
  };

  displayStaticImages(){
    var key = 0;
    var images = [];
    this.props.images.forEach(function(image){ 
      images.push(<img className="projectImageMain" src={require('./images'+image)} alt={"Project"} key={key} />)
      key++;
    })
    return images;
  }

  checkStateLeftSingle(){
    var currentState = this.state.image;
    if(this.state.image === 0){
      this.setState({image: this.props.images.length-1})
    }else{
      this.setState({image: --currentState})
    }
  };

  checkStateRightSingle(){
    var currentState = this.state.image;
    if(this.state.image === this.props.images.length-1){
      this.setState({image: 0})
    }else{
      this.setState({image: ++currentState})
    }
  };

  render(){
    return(
      <div>
        <MediaQuery minWidth={670}>
          <div className="projectImagesPlain">
            {this.displayStaticImages()}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={670} minWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.checkStateLeftSingle}></i>
            <img className="projectImageMain" src={require('./images'+this.props.images[this.state.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.checkStateRightSingle}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.checkStateLeftSingle}></i>
            <img className="projectImageMainSmall" src={require('./images'+this.props.images[this.state.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.checkStateRightSingle}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

class ImageCarousel extends Component {
  constructor(props){
    super(props);
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

  render(){
    return(
      <div>
        <MediaQuery minWidth={870}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeft}></i>
              <img className="projectImageSide" src={require('./images'+this.props.images[this.state.leftImage])} alt={"Project"} />
              <img className="projectImageMain" src={require('./images'+this.props.images[this.state.middleImage])} alt={"Project"} />
              <img className="projectImageSide" src={require('./images'+this.props.images[this.state.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={870} minWidth={700}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeft}></i>
              <img className="projectImageSideMedium" src={require('./images'+this.props.images[this.state.leftImage])} alt={"Project"} />
              <img className="projectImageMainMedium" src={require('./images'+this.props.images[this.state.middleImage])} alt={"Project"} />
              <img className="projectImageSideMedium" src={require('./images'+this.props.images[this.state.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={700} minWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="projectImageMain" src={require('./images'+this.props.images[this.state.middleImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="projectImageMainSmall" src={require('./images'+this.props.images[this.state.middleImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

class NonAppImages extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: 0
    }
    this.clickLeftSingle = this.clickLeftSingle.bind(this);
    this.clickRightSingle = this.clickRightSingle.bind(this);
  };

  clickLeftSingle(){
    var currentState = this.state.image;
    if(this.state.image === 0){
      this.setState({image: this.props.images.length-1})
    }else{
      this.setState({image: --currentState})
    }
  };

  clickRightSingle(){
    var currentState = this.state.image;
    if(this.state.image === this.props.images.length-1){
      this.setState({image: 0})
    }else{
      this.setState({image: ++currentState})
    }
  };

  render(){
    return(
      <div>
        <MediaQuery minWidth={750}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="nonAppImageLarge" src={require('./images'+this.props.images[this.state.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={450} maxWidth={750}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="nonAppImageMedium" src={require('./images'+this.props.images[this.state.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={450}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.clickLeftSingle}></i>
            <img className="nonAppImageSmall" src={require('./images'+this.props.images[this.state.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.clickRightSingle}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Projects;