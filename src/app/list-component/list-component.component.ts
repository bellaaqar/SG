import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {

  checkboxModel: boolean | undefined;
  listToShow:any[]=[];
   
  minValue: number = 100;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500}
  fromGroupList = new FormGroup(
    {
      street:new FormControl(''),
      apt:new FormControl(''),
      maison:new FormControl(''),
      floor:new FormControl(),
    }
  )

    list :any[] =[
      {street:'exemle',area:'exemleArea',price:'2000',type:'Appartement',floor:'3',priceMarket:'300',nbPiece:'3'}, 
      {street:'test',area:'testArea',price:'8999',type:'Maison',floor:null,priceMarket:'4000',nbPiece:'4'}, 
      {street:'exemle',area:'exemleArea',price:'2000',type:'Appartement',floor:'2',priceMarket:'300',nbPiece:'3'}, 
      {street:'test',area:'testArea',price:'8999',type:'Maison',floor:null,priceMarket:'4000',nbPiece:'4'}, 

  ]
  filtre(event:any){
     
  }
  constructor() { 
 
  }

  ngOnInit(): void {
  }

  filterList(filter:any){ 
      return this.list.filter(element=>  
        (element.street === filter.street) && (element.floor === filter.floor) );  
  }

  onSubmit() {
    console.log(this.list)
   this.listToShow = this.filterList(this.fromGroupList.value); 
   console.log(this.listToShow)
    console.log(this.fromGroupList.value);
  }
}
