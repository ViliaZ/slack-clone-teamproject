import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { ChannelListComponent } from './channel-list/channel-list.component';
import { ThreadContainerComponent } from './thread-container/thread-container.component';
import { DirectChannelListComponent } from './direct-channel-list/direct-channel-list.component';
import { DialogChannelComponent } from './dialog-channel/dialog-channel.component';
import { LoginComponent } from './login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { DialogAddDirectChannelComponent } from './dialog-add-direct-channel/dialog-add-direct-channel.component';
import { OrderByPipe } from 'src/pipes/order-by-pipe.pipe';
import { MessageComponent } from './message/message.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    ThreadContainerComponent,
    DirectChannelListComponent,
    DialogChannelComponent,
    LoginComponent,
    MainContainerComponent,
    InputboxComponent,
    DialogAddDirectChannelComponent,
    OrderByPipe,
    MessageComponent,
    DialogConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    NoopAnimationsModule,
    FormsModule,

    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule

  ],
  providers: [
    OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
