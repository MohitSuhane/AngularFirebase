import { Component } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
})
export class UploadComponent {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(event) {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    const filePath = `files/${fileName}`;
    this.storage.upload(filePath, file).then(
      (res) => {
        console.log(res);
        alert("File Uploaded Successfully");
      },
      (err) => {
        console.log(err);
        alert(`File Uploaded Error: ${err}`);
      }
    );
  }
}
