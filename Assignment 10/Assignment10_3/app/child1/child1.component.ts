import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {

  public ans=[];
  public res=[];
  public no=[13,15,37,95];
  
  public str = "This Is Sample Text";
  public res2;

  constructor(private chkprime:NumberService, private countcapital:StringService) { }

  ngOnInit(): void {
	  this.res = this.chkprime.ChkPrime(this.no);
	  
	  for(var i=0; i<this.no.length; i++)
	  {
		this.ans[i] = {"Number":this.no[i] , "Result":this.res[i]}; 
	  }
	  
	  this.res2 = this.countcapital.CountCapital(this.str);
	  
  }
  
  
}
