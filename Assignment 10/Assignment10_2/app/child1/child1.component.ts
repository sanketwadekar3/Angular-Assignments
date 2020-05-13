import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {

  public ans=[];
  public res=[];
  public no=[13,15];

  constructor(private chkprime:NumberService) { }

  ngOnInit(): void {
	  this.res = this.chkprime.ChkPrime(this.no);
	  
	  for(var i=0; i<this.no.length; i++)
	  {
		this.ans[i] = {"Number":this.no[i] , "Result":this.res[i]}; 
	  }
  }
  
  
}
