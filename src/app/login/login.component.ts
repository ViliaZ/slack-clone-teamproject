import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AuthService } from 'src/services/auth.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;
  user: any;

  constructor(private router: Router, private Data: DataService, private Auth: AuthService) { }

  ngOnInit(): void {
  }


  getUserChange(event: any) {
    console.log('login event', event);
    console.log('login event', event.user.uid);
  }


  /**
   * sets avatar to standard avatar 
   * and additionally for anonymous users displayName is set to 'Guest'
   */
  setStandardAvatarAndGuestName(id: string, type: string) {
    if (type == 'avatar') {// registered user without avatar
      this.Auth.updateProperties({ photoURL: 'assets/img/avatar-neutral.png' });
      this.Data.updateUserProperties(id, {
        photoURL: 'assets/img/avatar-neutral.png'
      });
    } else {//anonymous user
      this.Auth.updateProperties({ displayName: 'Guest', photoURL: 'assets/img/avatar-neutral.png' });
      this.Data.updateUserProperties(id, {
        displayName: 'Guest', photoURL: 'assets/img/avatar-neutral.png'
      });
    }
  }


  printError(event: Event) {
    console.error(event);
  }


/**
 * 
 */
  closeThreadContainer() {
    this.Data.closeCurrentThread(false, this.Auth.currentUserId);
    this.Data.deleteThreadSubscription();
  }
}
