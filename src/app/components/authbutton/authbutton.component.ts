import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authbutton',
  templateUrl: './authbutton.component.html',
  styles: [],
})
export class AuthbuttonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
