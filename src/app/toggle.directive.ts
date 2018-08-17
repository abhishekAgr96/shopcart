import { Directive,HostListener } from '@angular/core';
import {ElementRef} from '@angular/core'
@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private elementRef:ElementRef) { }

  // hideshow(){
  //   console.log("called");
  //   this.elementRef.nativeElement.style.width='200%';
  //   this.elementRef.nativeElement.style.backgroundcolor="red"
  // }
  
}
 
