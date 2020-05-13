import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  
  private ans=[];
  
  ChkPrime(num)
  {
	  for(var i=0; i<num.length; i++)
	  {
		if(num[i]%2 != 0 && num[i]%3 != 0 && num[i]%5 != 0 && num[i]%7 !=0)
		{
			this.ans[i] = "Prime Number";
		}
		else
		{
			this.ans[i] = "Composite Number";
		}
	  }
	  return this.ans;
  }
}
