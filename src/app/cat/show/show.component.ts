import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service: SharedService) { }

  AnimalList: any=[];
  PhotoFilePath: string;

  ModalTitle:string;
  ActivateAddEditComp:boolean;
  ani:any;

  ngOnInit(): void {
    this.refreshAnimalList(); 
    this.PhotoFilePath = this.service.Photourl
  }
  
  
  addClick(){
    this.ani={
      AnimalId:0,
      Species:"",
      PhotoFileName:"Sunspot Plant.jpeg"
    }
    this.ModalTitle = "Add Animal";
    this.ActivateAddEditComp=true;
  }

  deleteClick(item) {
    if(confirm('Permanently delete this item?')) {
      this.service.deleteAnimal(item.AnimalId).subscribe(data => {
        alert(data.toString());
        this.refreshAnimalList()
      })
    }
  }

  editClick(item){
    this.ani=item;
    this.ModalTitle = "Edit Animal";
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshAnimalList();
  }

  refreshAnimalList(){
    this.service.getAnimalList().subscribe(data => {
      this.AnimalList=data;
      console.log(this.AnimalList)
    })
    
  }

}
