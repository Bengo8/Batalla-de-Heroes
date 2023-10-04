import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroComponent } from '../app/core/my-hero/my-hero.component';

describe('MyHeroComponent', () => {
  let component: MyHeroComponent;
  let fixture: ComponentFixture<MyHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHeroComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(MyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Should show HistorialButton', () => {
    let historialButton = fixture.nativeElement.getElementsByClassName('battleHistoryButton')[0];
    expect(historialButton).toBeTruthy();
  });

  it('Should show ReiniciarButton', () => {
    let resetButton = fixture.nativeElement.getElementsByClassName('resetHeroButton')[0];
    expect(resetButton).toBeTruthy();
  });

  it('Should show hero information', () => {
    let heroImg = fixture.nativeElement.getElementsByClassName('heroImg')[0];
    let heroIntelligence = fixture.nativeElement.getElementsByClassName('heroIntelligence')[0];
    let heroStrength = fixture.nativeElement.getElementsByClassName('heroStrength')[0];
    let heroSpeed = fixture.nativeElement.getElementsByClassName('heroSpeed')[0];
    let heroDurability = fixture.nativeElement.getElementsByClassName('heroDurability')[0];
    let heroPower = fixture.nativeElement.getElementsByClassName('heroPower')[0];
    let heroCombat = fixture.nativeElement.getElementsByClassName('heroCombat')[0];

    expect(heroImg).toBeTruthy();
    expect(heroIntelligence).toBeTruthy();
    expect(heroStrength).toBeTruthy();
    expect(heroSpeed).toBeTruthy();
    expect(heroDurability).toBeTruthy();
    expect(heroPower).toBeTruthy();
    expect(heroCombat).toBeTruthy();    
  });

  it('Should reset game when resetButton is clicked', () => { 
  });

  
  it('Should reset game when resetButton is clicked', () => { 

  });

  it('Should show battleHistory when historyButton is clicked', () => { 

  });
});
