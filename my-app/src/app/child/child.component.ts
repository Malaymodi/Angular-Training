import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  /*@Input() myData: string = '';
 @Input() myDataArr:string [] = [];
 @Input() myDataObject:any = {};*/
 currentMsgToSibling = '';
 @Output() msgToSibling = new EventEmitter<any>();
 msgToSib() { 
  this.msgToSibling.emit(this.currentMsgToSibling)
  console.log(this.currentMsgToSibling);
}
 
  ngOnInit(): void {
  }

}
