import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit, OnDestroy{
  @Output() startNewGame = new EventEmitter<void>();
  
  public heroData: Hero = {} as Hero;
  public showBattleHistory: boolean = false;
  public noData: boolean = true;

  constructor(private _heroService: HeroService, private _ref: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.heroData = this._heroService.getCurrentHero();
    if (this.heroData === null) {
      this._heroService.getNewHero().subscribe((heroData: Hero) => {
        if (heroData == null) {
          this.noData = true;
        } else {
          this.heroData = heroData;
          this.noData = false;
        }
      });
    }
  }

  ngOnDestroy(): void {
  }

  public showBattleLogs(): void {
    this.showBattleHistory = true;
    this._ref.detectChanges();
  }

  public resetGame(): void {
    this._heroService.resetData();
    this.startNewGame.emit();
  }
}
