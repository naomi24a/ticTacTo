import { Component } from '@angular/core';

//define enum Player
enum Player {
  None = '', //default
  X = 'X',
  O = 'O'
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  gameStarted: boolean = false;
  currentPlayer: Player = Player.X; //Player X starts
  winner: Player = Player.None; //1. winner is Player.None
  warningMessage: string | null = null;
  //initialize 3x3 empty board using None in all cells
  board: Player[][] = [
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None]
  ];

  //method to make a move by the current player
  makeMove(row: number, col: number): void {
    if (this.winner !== Player.None) {
      return;
    }

    if (this.board[row][col] === Player.None) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        return;
      }
      this.switchPlayer();
    } else {
      this.warningMessage = "The cell is already taken!";
      setTimeout(() => {
        this.warningMessage = null;
      }, 1000);
    }
  }

  //methode to check the winner
  checkWinner(): boolean {

    //check rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] !== Player.None &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2]
      ) {
        this.winner = this.board[i][0];
        return true;
      }
    }

    //check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] !== Player.None &&
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i]
      ) {
        this.winner = this.board[0][i];
        return true;
      }
    }

    //check diagonals
    if (
      this.board[0][0] !== Player.None &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]
    ) {
      this.winner = this.board[0][0];
      return true;
    }
  
    if (
      this.board[0][2] !== Player.None &&
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0]
    ) {
      this.winner = this.board[0][2];
      return true;
    }

    return false;
  }

  //method to check if the board is full
  isBoardFull(): boolean {
    for (let row of this.board) {
      for (let cell of row) {
        if (cell === Player.None) {
          return false;
        }
      }
    }
    return true;
  }

  //method to switch the current player 
  switchPlayer(): void {
    if (this.winner === Player.None) {
      this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }
  }
  
  startGame() {
    this.gameStarted = true;
  }

  resetGame() {
    this.gameStarted = false;
    this.currentPlayer = Player.X;
    this.winner = Player.None;
    this.board = [
      [Player.None, Player.None, Player.None],
      [Player.None, Player.None, Player.None],
      [Player.None, Player.None, Player.None]
    ];    
  }
}