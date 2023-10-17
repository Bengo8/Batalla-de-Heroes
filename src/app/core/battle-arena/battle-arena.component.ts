import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.css']
})
export class BattleArenaComponent {
  public newGameStarted: boolean = false;
  public figthStarted: boolean = false;

  constructor(private _ref: ChangeDetectorRef) {}
  public startNewGame(): void {
    this.newGameStarted = true;
    this.figthStarted = false;
    this._ref.detectChanges();
  }

  public startNewFigth(): void {
    this.newGameStarted = true;
    this.figthStarted = true;
    this._ref.detectChanges();
  }

  public resetGame(): void {
    this.newGameStarted = false;
    this.figthStarted = false;
    this._ref.detectChanges();
  }
}
