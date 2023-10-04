import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BattleArenaComponent } from 'src/app/core/battle-arena/battle-arena.component';
import { BattleComponent } from 'src/app/core/battle/battle.component';
import { MyHeroComponent } from 'src/app/core/my-hero/my-hero.component';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, BattleArenaComponent, BattleComponent, MyHeroComponent]
      }).compileComponents();
      
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    }
  );

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Shoul call to BattleArenaComponent', () => {
    const battleArenaComponentElement = fixture.nativeElement.querySelector('app-battle-arena');
    expect(battleArenaComponentElement).toBeTruthy();
  });
});
