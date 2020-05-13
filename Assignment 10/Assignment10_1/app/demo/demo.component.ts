import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
	
  public add_res;
  public sub_res;

  constructor(private addsub: ArithmeticService) { }

  ngOnInit(): void {
	  this.add_res = this.addsub.Add(5,3);
	  this.sub_res = this.addsub.Sub(5,3);
  }

}
