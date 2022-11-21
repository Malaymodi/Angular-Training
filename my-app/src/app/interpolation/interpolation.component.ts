import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = "Malay Modi";
  public message = "I am learning angular";


  
  constructor() { }

  ngOnInit(): void {
  }

  demofuntion(){
    return "this is demo function"
  }

}
