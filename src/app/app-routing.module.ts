import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { DailyquestComponent } from './dailyquest/dailyquest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MinigamesComponent } from './minigames/minigames.component';
import { NewsComponent } from './news/news.component';
import { StorymodeComponent } from './storymode/storymode.component';
import { TrophyroomComponent } from './trophyroom/trophyroom.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'storymode', component: StorymodeComponent
  },
  {
    path: 'dailyQuest', component: DailyquestComponent
  },
  {
    path: 'trophyRoom', component: TrophyroomComponent
  },
  {
    path: 'character', component: CharacterComponent
  },
  {
    path: 'miniGames', component: MinigamesComponent
  },
  {
    path: 'newsShop', component: NewsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
