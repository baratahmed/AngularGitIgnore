import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';
import { Page } from 'src/app/shared/page.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  list: Page[];
  constructor(private service: PageService, private firestore: AngularFirestore, private toastr: ToastrService){ }

  ngOnInit() {
    this.service.getPages().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Page;
      })
    });
  }
  onEdit(page: Page){
    this.service.formData = Object.assign({},page);

  }
  onDelete(id : string){
    if(confirm("Are you sure to delete this record?")){
      this.firestore.doc('pages/'+id).delete();
      this.toastr.warning("Page Deleted Successfully!!!","ANGULAR CMS");
    }
  }

}
