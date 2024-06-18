import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {

  name="john dow"
  qnt:number=1

  product={
    id:1,
    name:"iphone x",
    price:1000,
    color:"Black",
    discount:8.5,
    inStock:5,
    pImage:'/assets/images/Iphonee.jfif'
  }
  qntPlus(){

    if(this.qnt<this.product.inStock){
      this.qnt++
    }
  }
  qntMinus(){
    if(this.qnt>0){
      this.qnt--

    }
    
  }

}

