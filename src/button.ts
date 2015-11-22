import {bootstrap, Component} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: '<button type="button" (click)=onClick()>Something else{{model[modelProperyName]}}</button>'
})
class AppComponent {
  model = {
    test: 'it worked',
    test2: 'something else'
  }

  modelProperyName = 'test2'

  onClick() {
    console.log('clicked');
  }
 }
bootstrap(AppComponent);
