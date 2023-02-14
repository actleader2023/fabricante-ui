import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForIn') numbers: number[]
  @Input('myForUsing') text: string

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>)
  {
    this.numbers = []
    this.text = ''
  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }

    console.log(this.numbers)
    console.log(this.text)
  }
}
