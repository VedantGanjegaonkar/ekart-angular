
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

  @Input() productsForFilter:{
    id:number,
    name:string,
    description:string,
    brand:string,
    gender:string,
    category:string,
    size:number[],
    color:string[],
    price:number,
    discountPrice?:number,
    is_in_inventory:boolean,
    items_left:number,
    imageURL:string,
    slug:string
  }[]=[]
  all : number = 0;
  instock:number=0
  outOfStock:number=0

@Output()
  filterchanged=new EventEmitter<string>()

   selectedFilterValue:string='all'

  onfilterValueChange(){

    console.log("from child:",this.selectedFilterValue);
    
    this.filterchanged.emit(this.selectedFilterValue)
  }

 
ngOnInit(){

  this.all= this.productsForFilter.length
  this.instock=this.productsForFilter.filter(p=>p.is_in_inventory==true).length
  this.outOfStock=this.productsForFilter.filter(p=>p.is_in_inventory==false).length

}

}
