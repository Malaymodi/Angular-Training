import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h3 id="inlineh3"> This is demo of inline component`,
  styles: [`
       #inlineh3{
        color:blue;
       }
  `]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
