import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() public MyEvent = new EventEmitter();
  
  text = "";
  
  public SendEvent(text)
  {
	  this.MyEvent.emit(text)
  }

  ngOnInit(): void {
  }

}
