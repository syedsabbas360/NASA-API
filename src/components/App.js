import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm.js'
import ImageDisplay from './ImageDisplay.js'
import GetImageButton from './GetImageButton.js'


const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=irYldlJzaHDvLiwsHKAzK7s9hf4G2dkjmnuOIc3R"

class App extends Component {

  render() {
    return (
      <div>
      <GetImageForm />
      </div>
    );
  }
}

export default App;
