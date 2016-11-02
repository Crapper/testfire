import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @HostBinding('class.active') get active(){
    
    return this.isOpen;
  }
  @HostListener('click') setActive(){
    this.isOpen =! this.isOpen;
  }
  
  private isOpen = false;
}
