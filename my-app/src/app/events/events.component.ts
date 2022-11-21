import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickfunction(a:string){
   this.name = 'Malay';
    alert(a)
  }

}
