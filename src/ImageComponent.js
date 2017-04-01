import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

class ImageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: 0,
      leftImage: this.props.images.length-1,
      middleImage: 0,
      rightImage: 1
    }
    this.clickLeftSingle = this.clickLeftSingle.bind(this);
    this.clickRightSingle = this.clickRightSingle.bind(this);

  }

  clickLeftSingle(){
    if(this.state.image === 0){
      this.setState({image: this.props.images.length-1});
    }else{
      this.setState({image: --this.state.image});
    }
  };

  clickRightSingle(){
    if(this.state.image === this.props.images.length-1){
      this.setState({image: 0})
    }else{
      this.setState({image: ++this.state.image})
    }
  };

  showImages(){
    if(this.props.what === 'app'){
      if(this.props.images && this.props.images.length > 2){
        return  <ImageCarousel images={this.props.images} />
      }else if(this.props.images && this.props.images.length <= 2){
        return <PlainImage images={this.props.images} onclickLeft={this.clickLeftSingle} onclickRight={this.clickRightSingle} image={this.state.image} />
      }
    }else{
      if(this.props.images){
        return <NonAppImages images={this.props.images} onclickLeft={this.clickLeftSingle} onclickRight={this.clickRightSingle} image={this.state.image}/>
      }
    }
  };

  render() {
    return (
      <div>
        {this.showImages()}
      </div>
    );
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
      return 0;
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
  render(){
    return(
      <div>
        <MediaQuery minWidth={750}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.props.onclickLeft}></i>
            <img className="nonAppImageLarge" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={450} maxWidth={750}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.props.onclickLeft}></i>
            <img className="nonAppImageMedium" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={450}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.props.onclickLeft}></i>
            <img className="nonAppImageSmall" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

class PlainImage extends Component {

  displayStaticImages(){
    var key = 0;
    var images = [];
    this.props.images.forEach(function(image){ 
      images.push(<img className="projectImageMain" src={require('./images'+image)} alt={"Project"} key={key} />)
      key++;
    })
    return images;
  }

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
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.props.onclickLeft}></i>
            <img className="projectImageMain" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrowsSmall" aria-hidden="true" onClick={this.props.onclickLeft}></i>
            <img className="projectImageMainSmall" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
            <i className="fa fa-chevron-right arrowsSmall" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default ImageComponent;