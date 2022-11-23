import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  public value: number = 0;

  CounterFunction(val:string)
  {
      (val=='add') ? this.value++ : this.value--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
