import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-rolelogin',
  templateUrl: './rolelogin.component.html',
  styleUrls: ['./rolelogin.component.css']
})
export class RoleloginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }
}
