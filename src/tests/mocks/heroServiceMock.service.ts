import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BattleHistory } from "src/app/core/models/battleHistory.interface";
import { Hero } from "src/app/core/models/hero.interface";
import { heroHttpResponseMock, heroHttpResponseRemapMock } from "./models/heroModelsMocks";
import { RestService } from 'src/app/core/service/rest.service';
@Injectable({
  providedIn: 'root',
})
export class HeroServiceMock {
    public currentHero: Hero = null;
    
    constructor() { }
  
    public getNewHero(heroId?: number): Observable<Hero> {
      heroId = heroId !== null && heroId !== undefined && heroId > 0 ? heroId : 2;
  
      return new Observable((observer) => {
        const heroData: Hero = this._remapHeroData(heroHttpResponseMock);
        this._setCurrentHero(heroData);
        observer.next(structuredClone(heroHttpResponseRemapMock));
        observer.complete();
      });
    }
  
    public getCurrentHero(): Hero {
        return this.currentHero;
    }    

    public saveBattle(battle: BattleHistory): void {
      if (this.currentHero !== null) {
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

}
