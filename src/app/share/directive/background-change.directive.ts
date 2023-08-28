import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBackgroundChange]',
})
export class BackgroundChangeDirective {
  @Input() status: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'transparent'
    );
  }

  private changeBackgroundColor() {
    let color = '';

    console.log(this.status, 'staus');
    switch (this.status) {
      case 'to-do':
        color = '#FF6347';
        break;
      case 'in-progress':
        color = '#1E90FF';
        break;
      case 'completed':
        color = '#7FFF00';
        break;
      default:
        color = 'transparent';
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
