import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  private ch;
  private count=0;
  
  CountCapital(str)
  {
	  for(var i = 0; i < str.length; ++i)
	  {
		  this.ch = str.charAt(i);
		  if(this.ch >= 'A' && this.ch <= 'Z')
		  {
			  ++this.count;
		  }
	  }
	  return this.count;
  }
}