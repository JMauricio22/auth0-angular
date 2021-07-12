import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  profile: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });
  }
}
