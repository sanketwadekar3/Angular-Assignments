import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Demo';
  public str="";
  
  public Submit(str)
  {
	  this.str = str; 
  }
}
