import React from "react";
import './App.css';

const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 60, id: 4},
];

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10,
      name: 'aa'
    };
    this.incrementScore();
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }

  incrementScore = () => {
    console.log(this);
    this.setState((prevState) => ({score: prevState.score + 1}));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score -1
    }))
  }

}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    {/*모든 props를 넘길려면 { ...props}*/}
    <Counter score={props.score} />
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={1 + 10} />

        {/*Players List*/}
        {/*    <Player name="LDK" score={50}/>
    <Player name="HONG" score={70}/>
    <Player name="KIM" score={90}/>
    <Player name="PARK" score={80}/>*/}
        {
          this.state.players.map(player =>
            <Player name={player.name} id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}/>)
        }
      </div>
    )
  }
}

export default App;
