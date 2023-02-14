import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurpleBackground]'
})
export class PurpleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'purple'
   }

}
