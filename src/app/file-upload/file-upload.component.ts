import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  filesToUpload: File[] = File[''];

  constructor() { }

  ngOnInit() {
  }

  static onSubmit(): void {
    console.log('submitted');
    // for (let fileToUpload of this.filesToUpload) {
    // }
  }

  onChange(event: any):void {
    console.log('files changed');
    this.filesToUpload = event.target.files;
    // console.log();
    for (let fileToUpload of this.filesToUpload) {
      console.log('uploaded: ' + fileToUpload.name);
    }
  }

}
