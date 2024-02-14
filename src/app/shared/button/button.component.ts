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
}
