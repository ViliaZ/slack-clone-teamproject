import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Message } from 'src/models/message.class';
import { DataService } from 'src/services/data.service';
import { LinkMenuItem } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mobileQuery: MediaQueryList;
  userLinks: LinkMenuItem[];
  currentMessages: Message[];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    @Inject(MediaMatcher) media: MediaMatcher,
    public Data: DataService,
    public router: Router) {

    //check if screen width is too small for showing sidenav
    this.mobileQuery = media.matchMedia('(max-width: 870px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.userLinks = [
      { text: 'change profile picture (no function)' }
    ]

    this.Data.currentMessages$.subscribe(msg => this.currentMessages = msg)
  }
}
