import { Component, OnInit } from '@angular/core';
import { AuthProvider, NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor() { }

  ngOnInit(): void {
  }

  printUser(event:Event) {
    console.log(event);
  }

  printError(event:Event) {
    console.error(event);
  }
}
