import React, { Component } from "react";
import CurrentEvent from "./CurrentEvent";

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

//   This function is responsible for accessing the News API and populating its contents onto the DOM
  currentEvents = async (event) => {
    event.preventDefault();

    // The URL for the API, it's set to provide the top headlines in the United States that are related to politics.
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=0b997b9857ad47d1a87ac60973bdbb12";
    
    // 
    try {
      const response = await fetch(url);
    // Turns the data into JSON format
      const data = await response.json();
      console.log(data.articles[0]);

    // Variable created to randomize which index of the articles array the 
      const random = Math.floor(Math.random()*data.articles.length)

      this.setState({
        data: data.articles[random],
      });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    window.addEventListener("load", this.currentEvents);
  };
  
  render() {
    return (
      <div>
        <h1>This is the Explore page.</h1>
        <div className="currentEvents">
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>
            <CurrentEvent data={this.state.data}/>

        </div>
      </div>
    );
  }
}

export default ExplorePage;
