import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public version: string = "0.0.1";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  gotoHome(): void {
    this.router.navigate(['home']);
  }

  openDiscord(): void {
    open("https://discord.com/invite/D6rXPPV562");
  }
}
