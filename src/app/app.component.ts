import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  gameStarted: boolean = false;

  startGame() {
    this.gameStarted = true;
  }

  resetGame() {
    this.startGame();
  }
}