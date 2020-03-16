import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input type="text">
  <h3>Marvellous Infosystems</h3>`,
  styles: [`
	h3{
		color:blue
	}
  `]
})
export class AppComponent {
  title = 'Demo';
  
}
