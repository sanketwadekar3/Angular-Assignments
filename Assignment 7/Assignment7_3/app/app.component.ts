import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Demo';
  
  public flag = true;
  
  public fun()
  {
	this.flag = false;
  }
}
