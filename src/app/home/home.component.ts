import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
    
  }

  ngOnInit() {}

  gotoStoryModus(): void {
    this.router.navigate(['storymode']);
  }

  gotoTrophyRoom(): void {
    this.router.navigate(['trophyRoom']);
  }

  gotoMiniGames(): void {
    this.router.navigate(['miniGames']);
  }

  gotoDailyQuest(): void {
    this.router.navigate(['dailyQuest']);
  }

  gotoCharacter(): void {
    this.router.navigate(['character']);
  }

  gotoNews(): void {
    this.router.navigate(['newsShop']);
  }
}
