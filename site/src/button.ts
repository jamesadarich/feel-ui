import {bootstrap, Component, NgClass} from 'angular2/angular2';
@Component({
    directives: [NgClass],
    selector: 'my-app',
    template: '<button type="button" [ng-class]="getPressedClass()" (mousedown)=onMouseDown() (click)=onClick()>{{model[modelProperyName]}}</button>'
})
class AppComponent {
  model = {
    test: 'it worked',
    test2: 'something else'
  }

  isPressed = false;

  getPressedClass() {
    return { 'pressed-button': this.isPressed }
  }

  modelProperyName = 'test2'

  onClick() {
    console.log('clicked');
  }

  onMouseDown() {
    this.isPressed = true;
    document.onmouseup = this.onMouseUp.bind(this);
  }

  onMouseUp() {
    this.isPressed = false;
  }
 }
bootstrap(AppComponent);
