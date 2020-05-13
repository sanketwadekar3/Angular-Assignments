import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  public str = "This Is Sample Text";
  public res;

  constructor(private countcapital:StringService) { }

  ngOnInit(): void {
	  this.res = this.countcapital.CountCapital(this.str);
  }

}
