import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {item} from '../item';
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private categoryService:CategoryService,private router:Router) { }

  category:string;
  productList=[];
  priceTotal:number=0;
  clickMe(){
    this.category=this.categoryService.getCategory();
    console.log("cate",this.category);
    item.forEach(item => {
      if(this.category==item.category){
        this.productList=item.productList;
      }
    });  
  }
  totalItem:number=0;
addedItemList=[]
  totalPrice(product){
    this.totalItem++;
    this.addedItemList.push(product);
    this.priceTotal+=product.price;
    this.categoryService.setTotalPrice(this.priceTotal);
  }
  

  checkOut(){
   // console.log(this.addedItemList);
    this.categoryService.setItemList(this.addedItemList);
    this.router.navigate(['checkout']);
  }

  ngOnInit() {
   this.clickMe(); 
  }

}
