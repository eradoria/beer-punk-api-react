import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { render } from "@testing-library/react";

import BeerCard from "./BeerCard";
import LikeButton from "./button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfBeer: [],
      isClicked: true,
    };
  }

 

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  componentDidUpdate() {
    console.log("I updated");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                key={index}
                name={beer.name}
                image_url={beer.image_url}
                brewed={beer.first_brewed}
                tag={beer.tagline}
                description={beer.description}
                button = {LikeButton}
                />
                );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
