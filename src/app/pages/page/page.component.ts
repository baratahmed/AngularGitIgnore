import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private service: PageService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form ? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id : null,
      pageName : '',
      pageTitle : '',
      pageDescription : '',

    }
  }
  onSubmit(form : NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
      this.firestore.collection('pages').add(data);
      this.toastr.success("Page Created Successfully!!!","ANGULAR CMS");
}
    else{
      this.firestore.doc('pages/'+form.value.id).update(data);
      this.toastr.success("Page Updated Successfully!!!","ANGULAR CMS");
}
    this.resetForm(form);
    
}

}
