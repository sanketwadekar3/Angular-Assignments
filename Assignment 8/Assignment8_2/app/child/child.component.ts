import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() public parentData;
  
  @Output() public MyEvent = new EventEmitter();
  
  public SendEvent()
  {
	  this.MyEvent.emit("Hello from Child");
  }

  ngOnInit(): void {
  }

}
