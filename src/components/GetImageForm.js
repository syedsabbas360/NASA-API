import React, { Component } from 'react';
import '../styles/App.css';
import ImageDisplay from './ImageDisplay.js'
import GetImageButton from './GetImageButton'

const API_KEY = "Uwj1GQWO5xaxwhk243EI1BHKJO9XJlzxsTCQZIAa"

export default class GetImageForm extends Component {
  constructor(){
    super()

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchRoverImage= this.fetchRoverImage.bind(this);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      sol: "",
      images: []
    }
  }

//need to fix following func to
  fetchRoverImage(e){
    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sol: this.state.sol
    });
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    console.log("fired")

    fetch(imageUrl)
    .then(results => results.json())
    .then(data => {
      console.log(data)
      this.setState({
        images: data.photos
      })
    })
  }

   handleRover(e) {
    this.setState({
      rover: e.target.value
    })
  }
   handleCamera(e) {
    this.setState({
      camera: e.target.value
    })
   }
   handleSol(e){
     this.setState({
       sol: e.target.value
     })
   }
//create variable fetchRoverImage that uses a fetch call to retrieve pics from the Nasa Mars Rover API

  render() {
    return (
      <div className="App">
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
            <GetImageButton onClick={this.fetchRoverImage}/>
            <ImageDisplay images={this.state.images}/>
      </div>
    );
  }
}
