import React, { Component } from 'react';
import '../styles/App.css';

const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=irYldlJzaHDvLiwsHKAzK7s9hf4G2dkjmnuOIc3R"


export default class GetImageButton extends Component{




  render() {
    return (
      <div className="App">

      <button type="submit" onClick={this.props.onClick}>Get Rover Image</button>

      </div>
    );
  }
}
