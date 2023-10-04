import { Component } from '@angular/core';

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.css']
})
export class BattleArenaComponent {
  public newGameStarted: boolean = false;
  public figthStarted: boolean = false;

  public startNewGame(): void {
    this.newGameStarted = true;
    this.figthStarted = false;
  }

  public startNewFigth(): void {
    this.newGameStarted = true;
    this.figthStarted = true;
  }
}
