import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.css']
})
export class StructureDirectivesComponent implements OnInit {
 
  public display = true;
  public language = "";
  public fruits = ["Apple","Banana","Chickoo","Mango","Grapes","Orange"]
  constructor() { }

  ngOnInit(): void {
  }

}
