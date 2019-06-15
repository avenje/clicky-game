import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      highScore: 0,
      friends: friends
    }
  }

  shuffleFriends = (array) => {
    console.log("shuffleFriends: ");
    let i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.setState({friends});
  }


  clickFriends = id => {
    console.log("clickFriends: ");
    this.state.friends.forEach((target) => {
      if(target.id === id) {
        if(target.clicked) {
          console.log("you lose");
          alert("You lost by clicking on the same card twice!/n" +
          "Final Score: " + this.state.score);
          this.newGame();
          return false;
        }
        else {
          this.newScore();
          target.clicked = true;
        }
        if(this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  }

  newScore = () => {
    console.log("newScore: ");
    this.setState((newState) => ({
      score: newState.score + 1
    }),
  () => this.winChecker() );
  };

  newHighScore = () => {
    console.log("newHighScore");
    this.setState((newState) => {
      score: newState.score + 1
    }), () => this.winChecker();
  }

  winChecker = () => {
    console.log("winsChecker");
    if(this.state.score === this.state.friends.length) {
        alert("You Won!");
        this.newGame();
    }
    else {
      setTimeout(() => this.shuffleFriends(this.state.friends), 200);
    }
  };

  newGame = () => {
    console.log("newGame: ");
    this.state.friends.forEach((target) => {
      target.clicked = false;
    });
    this.setState({score: 0});
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <h1 score={this.state.score} highscore={this.state.highScore} />
        {this.state.friends.map((target) => {
          return <FriendCard {...target} key={target.id} clickFriends={this.clickFriends} shuffleFriends= {() => {this.shuffleFriends(this.state.friends)}}
          />
        })}
      </Wrapper>
    );
  }
};

export default App;
