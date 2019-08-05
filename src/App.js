import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      gameEnd: false,
      winner: undefined
    };
    this.gameState = {
      board: Array(9).fill(""),
      totalMoves: 0
    };
  }
  clicked(event) {
    const { board } = this.gameState;
    if (board[event.target.dataset.square] === "") {
      event.target.innerText = this.state.turn;
      board[event.target.dataset.square] = this.state.turn;
      this.setState({
        turn: this.state.turn === "X" ? "O" : "X"
      });
      this.gameState.totalMoves++;
    }
    var result = this.checkWinner();
    if (result === "X") {
      this.setState({
        gameEnd: true,
        winner: "X wins the Game"
      });
    } else if (result === "O") {
      this.setState({
        gameEnd: true,
        winner: "O wins the Game"
      });
    } else if (result === "draw") {
      this.setState({
        gameEnd: true,
        winner: "Match Draw"
      });
    }
    console.log(this.state.gameEnd);
  }
  checkWinner() {
    var moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    var board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      )
        return board[moves[i][0]];
    }
    if (this.gameState.totalMoves === 9) {
      return "draw";
    }
  }
  render() {
    return (
      <div id="game">
        <div id="head">
          <h3>{this.state.winner}</h3>
        </div>
        <div id="board" onClick={e => this.clicked(e)}>
          <div className="square" data-square="0" />
          <div className="square" data-square="1" />
          <div className="square" data-square="2" />
          <div className="square" data-square="3" />
          <div className="square" data-square="4" />
          <div className="square" data-square="5" />
          <div className="square" data-square="6" />
          <div className="square" data-square="7" />
          <div className="square" data-square="8" />
        </div>
      </div>
    );
  }
}

export default App;
