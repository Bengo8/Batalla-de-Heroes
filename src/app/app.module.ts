import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleArenaComponent } from './core/battle-arena/battle-arena.component';
import { BattleComponent } from './core/battle/battle.component';
import { MyHeroComponent } from './core/my-hero/my-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleArenaComponent,
    BattleComponent,
    MyHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
