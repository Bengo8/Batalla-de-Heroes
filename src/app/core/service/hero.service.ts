import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { BattleHistory } from '../models/battleHistory.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public currentHero: Hero = null;

  constructor(private _restApi: RestService) { }

  public getNewHero(heroId?: number): Observable<Hero> {
    heroId = heroId !== null && heroId !== undefined && heroId > 0 ? heroId : 2;
    return new Observable((observer) => {
      this._restApi.get("https://superheroapi.com/api/1746498355772229/" + heroId.toString()).subscribe((response: any) => {
        if (response != null && response != undefined && response?.name !== undefined) {
          const heroData: Hero = this._remapHeroData(response);
          this._setCurrentHero(heroData);
          observer.next(heroData);
          observer.complete();
        } else {
          observer.next(null);
          observer.complete();
        }
      })
    });
  }

  public getHeroByName(name: string): Observable<Hero> {
    return new Observable((observer) => {
      this._restApi.get("https://www.superheroapi.com/api.php/1746498355772229/search/" + name).subscribe((response: any) => {
        const heroData: Hero = this._remapHeroData(response);
        observer.next(heroData);
        observer.complete();
      })
    })
  }

  public getCurrentHero(): Hero {
      return this.currentHero;
  }    

  public saveBattle(battle: BattleHistory): void {
    if (this.currentHero !== null && this._checkBattle(battle)) {
      this.currentHero.battleHistory.push(battle);
    }
  }

  public resetData(): void {
    this.currentHero = null;
  }

  private _remapHeroData(heroData: any): Hero {
    const hero: Hero = {
      id: Number(heroData.id),
      name: heroData.name,
      img: heroData.image.url,
      intelligence: Number(heroData.powerstats.intelligence),
      strength: Number(heroData.powerstats.strength),
      speed: Number(heroData.powerstats.speed),
      durability: Number(heroData.powerstats.durability),
      power: Number(heroData.powerstats.power),
      combat: Number(heroData.powerstats.combat),
      battleHistory: []
    };

    return hero;
  }

  private _setCurrentHero(hero: Hero): void {
    this.currentHero = hero;
  }    

  private _checkBattle(battle: BattleHistory): boolean {
    return true;
  }
}
