import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }
  /*@Output() public childEvent = new EventEmitter();
  fireevent(){
   this.childEvent.emit("i am learning angular");
  } */


  @Input() currentMsgFromChildToChild2: any;
  //@Input() myDataArr:string [] = [];
  ngOnInit(): void {
    console.log(this.currentMsgFromChildToChild2)
  }
}
    
