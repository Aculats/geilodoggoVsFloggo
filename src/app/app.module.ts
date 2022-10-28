import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CharacterComponent } from './character/character.component';
import { DailyquestComponent } from './dailyquest/dailyquest.component';
import { MinigamesComponent } from './minigames/minigames.component';
import { NewsComponent } from './news/news.component';
import { StorymodeComponent } from './storymode/storymode.component';
import { TrophyroomComponent } from './trophyroom/trophyroom.component';


@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    LoginComponent,
    CharacterComponent,
    DailyquestComponent,
    MinigamesComponent,
    NewsComponent,
    StorymodeComponent,
    TrophyroomComponent
   ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
