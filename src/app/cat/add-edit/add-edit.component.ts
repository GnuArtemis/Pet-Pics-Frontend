import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ani: any;
  AnimalId: string;
  Species: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  ngOnInit(): void {
    this.AnimalId = this.ani.AnimalId;
    this.Species = this.ani.Species;
    this.PhotoFileName = this.ani.PhotoFileName
    this.PhotoFilePath=this.service.Photourl+this.PhotoFileName;
  }

  addAnimal() {
    var val = {
      AnimalId: this.AnimalId,
      Species: this.Species,
      PhotoFileName: this.PhotoFileName
    }
    this.service.addAnimal(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateAnimal(){
    var val = {
      AnimalId: this.AnimalId,
      Species: this.Species,
      PhotoFileName: this.PhotoFileName
    }
    this.service.updateAnimal(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event) {
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=> {
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.Photourl+this.PhotoFileName
    })
  }

}
