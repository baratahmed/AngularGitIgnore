import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  formData: Page;

  constructor(private firestore: AngularFirestore) { }
  getPages(){
    return this.firestore.collection('pages').snapshotChanges();
  }
}
