import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  
  Add(num1,num2)
  {
	  return num1+num2;
  }
  Sub(num1,num2)
  {
	  return num1-num2;
  }
}
