import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

class ImageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      leftImage: this.props.images.length-1,
      image: 0,
      rightImage: 1
    }
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);

  }

  checkStateForward(state){
    if(state === this.props.images.length-1){
      return 0
    }else{
      return ++state;
    }
  }

  checkStateBack(state){
    if(state === 0){
      return this.props.images.length-1
    }else{
      return --state;
    }
  }

  clickLeft(){
    this.setState({
      leftImage: this.checkStateBack(this.state.leftImage),
      image: this.checkStateBack(this.state.image),
      rightImage: this.checkStateBack(this.state.rightImage)
    })
  };

  clickRight(){
    this.setState({
      leftImage: this.checkStateForward(this.state.leftImage),
      image: this.checkStateForward(this.state.image),
      rightImage: this.checkStateForward(this.state.rightImage)
    })
  };

  showImages(){
    if(this.props.what === 'app'){
      if(this.props.images && this.props.images.length > 2){
        return  <ImageCarousel images={this.props.images} onclickLeft={this.clickLeft} onclickRight={this.clickRight} image={this.state.image} leftImage={this.state.leftImage} rightImage={this.state.rightImage} />
      }else if(this.props.images && this.props.images.length <= 2){
        return <PlainImage images={this.props.images} onclickLeft={this.clickLeft} onclickRight={this.clickRight} image={this.state.image} />
      }
    }else{
      if(this.props.images){
        return <NonAppImages images={this.props.images} onclickLeft={this.clickLeft} onclickRight={this.clickRight} image={this.state.image}/>
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
  render(){
    return(
      <div>
        <MediaQuery minWidth={870}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.props.onclickLeft}></i>
              <img className="projectImageSide" src={require('./images'+this.props.images[this.props.leftImage])} alt={"Project"} />
              <img className="projectImageMain" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
              <img className="projectImageSide" src={require('./images'+this.props.images[this.props.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={870} minWidth={700}>
          <div className="projectImages">
            <i className="fa fa-chevron-left arrows" aria-hidden="true" onClick={this.props.onclickLeft}></i>
              <img className="projectImageSideMedium" src={require('./images'+this.props.images[this.props.leftImage])} alt={"Project"} />
              <img className="projectImageMainMedium" src={require('./images'+this.props.images[this.props.image])} alt={"Project"} />
              <img className="projectImageSideMedium" src={require('./images'+this.props.images[this.props.rightImage])} alt={"Project"} />
            <i className="fa fa-chevron-right arrows" aria-hidden="true" onClick={this.props.onclickRight}></i>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={700} minWidth={500}>
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