import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  // gets access to a pointer, reference to a place where the directive is used
  constructor(public viewContainerRef: ViewContainerRef) {}
}
