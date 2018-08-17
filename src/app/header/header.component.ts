import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import {item} from '../item'
import {CategoryService} from '../category.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef:ElementRef, private categoryService:CategoryService, private router:Router) { }
categoryAyyar=[];
  clickme(){
    console.log(item.length);
    item.forEach((item)=>{
      this.categoryAyyar.push(item.category);
    })
  console.log(this.categoryAyyar);
  }

  setCategory(category){
    this.router.navigate(['product'])
    this.categoryService.setCategory(category);
  //  console.log(category);
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  
  ngOnInit() {
    this.clickme();
  }

}
 