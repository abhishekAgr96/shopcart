import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  category:string="fruites";
  getCategory(){
    return this.category;
  }
  setCategory(category){
    this.category=category;
    console.log("setCategory ",this.category);   
  }

  itemList=[];
  setItemList(itemList){
    this.itemList=itemList;
    console.log("setItemList ",this.itemList);
  }
  getItemList(){
    return this.itemList;
  }

  totalPrice=0;
  setTotalPrice(totalPrice){
    this.totalPrice=totalPrice;
  }
  getTotalPrice(){
    return this.totalPrice;
  }

}
