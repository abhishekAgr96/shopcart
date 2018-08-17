import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  addedItemList=[];
  totalPrice=0;
  ngOnInit() {
    this.addedItemList=this.categoryService.getItemList();
    this.totalPrice=this.categoryService.getTotalPrice();
    console.log(this.addedItemList);
  }

}
