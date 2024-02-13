import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  gameStarted = false;
  gameReset = false;

  startGame() {
    this.gameStarted = true;
    // this.gameReset = false;
  }

  resetGame() {
    this.gameReset = true;
    // this.gameStarted = false;
  }
}
