import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';

import { HeroService } from '../app/core/service/hero.service';
import { Hero } from 'src/app/core/models/hero.interface';
import { BattleHistory } from 'src/app/core/models/battleHistory.interface';
import { heroHttpResponseMock, heroHttpResponseRemapMock } from './mocks/models/heroModelsMocks';
import { heroBattleMock1, heroBattleMock2 } from './mocks/models/battleHistoryModelsMock';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
      ],
    }).compileComponents();
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // afterEach(() => {
  //   httpMock.verify();
  // });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Should get new Hero data and set as current Hero', () => {
  //   service.getNewHero().subscribe((hero: Hero) => {
  //     expect(hero).toEqual(heroHttpResponseRemapMock);
  //   });

  //   const req = httpMock.expectOne((fakeReq) =>
  //     fakeReq.url.includes('https://superheroapi.com/api/1746498355772229')
  //   );
  //   req.flush(heroHttpResponseMock);

  //   expect(service.getCurrentHero()).toEqual(heroHttpResponseRemapMock);
  // });

  // it('Should get specific Hero data (search by ID) and set as Current hero', () => {
  //   service.getNewHero(1).subscribe((hero: Hero) => {
  //     expect(hero).toEqual(heroHttpResponseRemapMock);
  //   });

  //   const req = httpMock.expectOne('https://superheroapi.com/api/1746498355772229/1');
  //   req.flush(heroHttpResponseMock);

  //   expect(service.getCurrentHero()).toEqual(heroHttpResponseRemapMock);
  // });

  // it('Should get specific Hero data (search by name)', () => {
  //   service.getHeroByName('Thor').subscribe((hero: Hero) => {
  //     expect(hero).toEqual(heroHttpResponseRemapMock);
  //   });

  //   const httpFakeRequest = httpMock.expectOne("https://www.superheroapi.com/api.php/1746498355772229/search/Thor");
  //   httpFakeRequest.flush(heroHttpResponseMock);
  // });

  // it('Should return current Hero', () => {
  //   service.currentHero = structuredClone(heroHttpResponseRemapMock);
  //   expect(service.getCurrentHero()).toBeTruthy();
  //   expect(service.getCurrentHero()).toEqual(heroHttpResponseRemapMock);
  // });
  
  // it('Should return nothing if current Hero does not exist', () => {
  //   service.currentHero = null;
  //   expect(service.getCurrentHero()).toBeNull();
  // });

  // it('Should return nothing and not set current hero if getting new Hero request return empty object', () => {
  //   service.getNewHero().subscribe((hero) => {
  //     expect(hero).toBeNull();
  //   });
  //   const httpMFakeRequest = httpMock.expectOne((fakeReq) =>
  //     fakeReq.url.includes('https://superheroapi.com/api/1746498355772229')
  //   );
  //   httpMFakeRequest.flush([]);

  //   expect(service.getCurrentHero()).toBeNull();
  // });

  // it('Should save hero battle as History Battle', () => {
  //   service.currentHero = structuredClone(heroHttpResponseRemapMock);
  //   service.saveBattle(heroBattleMock1);
  //   let currentHeroBattles: BattleHistory[] = service.getCurrentHero().battleHistory;
  //   expect(currentHeroBattles[0]).toEqual(heroBattleMock1);
  //   service.saveBattle(heroBattleMock2);
  //   currentHeroBattles = service.getCurrentHero().battleHistory;
  //   expect(currentHeroBattles.length).toBe(2);
  //   expect(currentHeroBattles[1]).toEqual(heroBattleMock2);
  // });

  // it('Should reset all data', () => {
  //   service.currentHero = structuredClone(heroHttpResponseRemapMock);
  //   service.resetData();
  //   expect(service.getCurrentHero()).toBeNull();
  // });
});
