import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef ) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }

   @Input('pkmnBorderCard') borderColor: string; //alias
   //@Input() pkmnBorderCard: string; //sans alias

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor); // || Alt+124
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
   }
 
  setHeight(height : number){
    this.el.nativeElement.style.height = `${height}`; //bactik Alt+96 
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  
} 
