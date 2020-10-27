import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DragDropModule, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  photos: any = [];
  getData: any = [];
  isGetData: Boolean = false;
  
  selectedFile: File = null;
  readonly url_upload_img = 'http://localhost:3000/photos/image/upload';

  constructor(private http:HttpClient){ 
     
  }

  ​drop(event: CdkDragDrop<object>) {
    ​moveItemInArray(this.photos, event.previousIndex, event.currentIndex);
  ​}

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    console.log('your uploaded file: ' + this.selectedFile.name);
    this.http.post(this.url_upload_img, fd).subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/photos').subscribe(res => { 
      this.getData = res;
      this.isGetData = true;
      for (let x in this.getData){
        this.photos.push('http://localhost:3000/photos/'+this.getData[x].path);
      }
      console.log(this.photos);
    })
    
  }

}
