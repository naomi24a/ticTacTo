import { Component, ViewChild } from '@angular/core';

import { BoardComponent } from './modules/board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tic Tac Toe';
  gameStarted: boolean = false;

  @ViewChild(BoardComponent) boardComponent!: BoardComponent;

  startGame() {
    this.gameStarted = true;
  }

  resetGame() {
    this.gameStarted = true;
    this.boardComponent.resetBoard();
  }
}