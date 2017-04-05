import React, { Component } from 'react';
import Header from './Header.js';
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
    this.setState({phone: "number"})
  }

  email(){
    this.setState({email: "my email"})
  }

  github(){
    window.open('https://github.com/sjscott84');
  }

  linkedin(){
    console.log('LinkedIn')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="contactCircles fullScreen">
          <ContactType what={this.state.phone} onclick={this.phone} />
          <ContactType what={this.state.email} onclick={this.email} />
          <ContactType what={"Github"} onclick={this.github} />
          <ContactType what={"LinkedIn"} onclick={this.linkedin} />
        </div>
      </div>
    );
  }
}

class ContactType extends Component {

  render(){
    return (
      <svg height={160} width={160}>
        <g>
          <circle className="svgCircle" cx={80} cy={80} r={80} onClick={this.props.onclick}></circle>
          <text x={"50%"} y={"50%"} textAnchor="middle">{this.props.what}</text>
        </g>
      </svg>
    )
  }
}

export default Contact;