import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishGameComponent } from './components/finish-game/finish-game.component';
import { GameComponent } from './components/game/game.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { DatabaseService } from './core/services/database.service';
import { reducers } from './core/state/reducers/root-reducer';
import { QuestionEffects } from './core/state/effects/database-effect';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartPageComponent,
    FinishGameComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([QuestionEffects]),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
