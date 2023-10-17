import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BattleArenaComponent } from 'src/app/core/battle-arena/battle-arena.component';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, BattleArenaComponent]
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
