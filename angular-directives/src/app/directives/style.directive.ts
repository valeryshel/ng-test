// директива для управления стилями
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appStyle]' //обязательный параметр
  // квадр скобки чтобы сделать атрибутом
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  // @Input() fontWeight = 'normal';
  @Input()
  dStyles!: { border?: string; fontWeight?: string; borderRadius?: string; };

  @HostBinding('style.color') elColor = 'yelow';
  //можно изменить класс с помощью директивы
  // @HostBinding('class.className') elClass = null;

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(el);
    //el.nativeElement.style.color = 'red'; // 1 method
    this.r.setStyle(this.el.nativeElement, 'color', 'blue'); //2 method
  }
  //не забыть зарегистрировать директиву в modules

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter () {
    this.elColor = 'orange';
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
  }
  @HostListener('mouseleave') onLeave () {
    this.elColor = 'limegreen';
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
  }
}
