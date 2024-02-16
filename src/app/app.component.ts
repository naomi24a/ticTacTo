import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public gameStarted?: boolean;
  
  startGame() {
    this.gameStarted = true;
    console.warn(this.gameStarted);
    
  }
}
