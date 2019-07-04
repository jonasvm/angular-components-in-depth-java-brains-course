import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //se no blog-post-tile.component eu tivesse usado um color="green" aqui no input não precisava passar @Input('appHighlight')
  @Input('appHighlight') color = "yellow";

  constructor(private element: ElementRef) {

    console.log(element);
    //com este nativeElement é possível ter controle dos elementos DOM completamente
    //element.nativeElement.style.backgroundColor = 'yellow';
  }

  //mudando para um método
  @HostListener('mouseenter') addHighlight() {
    //this.element.nativeElement.style.backgroundColor = 'yellow';
    //agora, usando o @Input, da pra pegar a cor do blog-post-tile.component.html
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
