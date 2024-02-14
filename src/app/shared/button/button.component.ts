import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Output() gameStarted = new EventEmitter<void>();

  startGame() {
    this.gameStarted.emit();
  }

  // resetGame() {
  //   this.gameStarted.emit();
  // }

  // gameStarted = false;
  // gameReset = false;

  // startGame() {
  //   this.gameStarted = true;
  // }

  // resetGame() {
  //   this.gameReset = true;
  // }
}
