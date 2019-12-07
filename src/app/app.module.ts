import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PagesComponent } from './pages/pages.component';
import { PageComponent } from './pages/page/page.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageService } from './shared/page.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
