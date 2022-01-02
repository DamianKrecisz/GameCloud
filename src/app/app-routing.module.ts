import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FinishGameComponent } from "./components/finish-game/finish-game.component";
import { GameComponent } from "./components/game/game.component";
import { StartPageComponent } from "./components/start-page/start-page.component";

const routes: Routes = [
  { path: 'game', component: GameComponent},
  { path: 'start-page', component: StartPageComponent },
  { path: 'finish', component: FinishGameComponent },

  { path: '**', component: StartPageComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
