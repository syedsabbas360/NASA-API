import React, { Component } from 'react';
import '../styles/App.css';

const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=irYldlJzaHDvLiwsHKAzK7s9hf4G2dkjmnuOIc3R"


export default class ImageDisplay extends Component{
  render() {
    return (
      <div className="App">
      {this.props.images.map((image)=>
             <div key={image.id}>
               <img src={image.img_src}/>
             </div>
         )}
      </div>
    );
  }
}
