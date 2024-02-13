import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: string) {
    let value = this.el.nativeElement.value.toUpperCase();
    this.el.nativeElement.value = value;
  }
}
