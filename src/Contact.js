import React, { Component } from 'react';
import Header from './Header.js';
import MediaQuery from 'react-responsive';
import './App.css';

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      phone: "Phone",
      email: "Email"
    }
    this.phone = this.phone.bind(this);
    this.email = this.email.bind(this);
    this.github = this.github.bind(this);
    this.linkedin = this.linkedin.bind(this);
  }

  phone(){
    this.setState({phone: "027 575 1705"})
  }

  email(){
    this.setState({email: "s.j.scott84@gmail.com"})
  }

  github(){
    window.open('https://github.com/sjscott84');
  }

  linkedin(){
    window.open('https://www.linkedin.com/in/sarah-scott-507328138/');
  }

  render() {
    return (
      <div className="App">
        <Header />
          <MediaQuery minDeviceWidth={800}>
            <div className="contactCircles">
              <ContactType what={this.state.phone} onclick={this.phone} />
              <ContactType what={this.state.email} onclick={this.email} />
              <ContactType what={"Github"} onclick={this.github} />
              <ContactType what={"LinkedIn"} onclick={this.linkedin} />
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={800}>
            <p></p>
            <div className="contactCirclesSmall">
              <ContactType what={this.state.phone} onclick={this.phone} />
              <ContactType what={this.state.email} onclick={this.email} />
              <ContactType what={"Github"} onclick={this.github} />
              <ContactType what={"LinkedIn"} onclick={this.linkedin} />
            </div>
          </MediaQuery>
      </div>
    );
  }
}

class ContactType extends Component {

  render(){
    return (
      <svg className="svg" height={180} width={180}>
        <g>
          <circle className="svgCircle" cx={90} cy={90} r={90} onClick={this.props.onclick}></circle>
          <text x={"50%"} y={"50%"} textAnchor="middle">{this.props.what}</text>
        </g>
      </svg>
    )
  }
}

export default Contact;