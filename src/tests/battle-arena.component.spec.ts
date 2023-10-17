import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BattleComponent } from "src/app/core/battle/battle.component";
import { MyHeroComponent } from "src/app/core/my-hero/my-hero.component";
import { BattleArenaComponent } from "../app/core/battle-arena/battle-arena.component"

describe('BattleArenaComponent', () => {
    let fixture: ComponentFixture<BattleArenaComponent>;
    let component: BattleArenaComponent;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [BattleArenaComponent, BattleComponent, MyHeroComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BattleArenaComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should be new game and figth not started on first load (new user)', () => {
        fixture.detectChanges();
        const newGameButton = fixture.nativeElement.getElementsByClassName('startNewGame')[0];
        
        expect(newGameButton).toBeTruthy();
        expect(component.newGameStarted).toBeFalsy();
        expect(component.figthStarted).toBeFalsy();
    })

    it('Should show start button if game is not started', () => {
        component.newGameStarted = false;
        fixture.detectChanges();
        const newGmeButton = fixture.nativeElement.getElementsByClassName('startNewGame')[0];
        expect(newGmeButton).toBeTruthy();
    });

    it('Sould start new game when newGameButton is clicked', () => {
        fixture.detectChanges();
        component.startNewGame();
        expect(component.newGameStarted).toBeTruthy();
        expect(component.figthStarted).toBeFalsy();
    })

    it('Should call to myHero component and show figth button if game is started and figth is not started', () => {
        component.newGameStarted = true;
        component.figthStarted = false;
        fixture.detectChanges();
        const figthButton = fixture.nativeElement.getElementsByClassName('startFigth')[0];
        const myHeroComponent = fixture.nativeElement.querySelector('app-my-hero');
        
        expect(figthButton).toBeTruthy();
        expect(myHeroComponent).toBeTruthy();
    });

    it('Sould start new figth when figthButton is clicked', () => {
        fixture.detectChanges();
        component.startNewFigth();
        expect(component.newGameStarted).toBeTruthy();
        expect(component.figthStarted).toBeTruthy();
    })

    it('Should call to battleComponent if figth is started', () => {
        component.newGameStarted = true;
        component.figthStarted = true;
        fixture.detectChanges();
        const battleComponent = fixture.nativeElement.querySelector('app-battle');
        expect(battleComponent).toBeTruthy();
    });

    it('Should be new game and figth not started if game is reset (myhero output)', () => {        
        fixture.detectChanges();
        component.resetGame();
        const newGameButton = fixture.nativeElement.getElementsByClassName('startNewGame')[0];
        
        expect(newGameButton).toBeTruthy();
        expect(component.newGameStarted).toBeFalsy();
        expect(component.figthStarted).toBeFalsy();
    })
});