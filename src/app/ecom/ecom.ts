import { Component } from '@angular/core';
import { Products } from '../services/products';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-ecom',
  imports: [],
  templateUrl: './ecom.html',
  styleUrl: './ecom.css'
})
export class Ecom {
  productList:any 

  constructor(private productService: Products){


  }


  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=> {
      console.log(data.products)
      this.productList = data.products
    })
  }
}
