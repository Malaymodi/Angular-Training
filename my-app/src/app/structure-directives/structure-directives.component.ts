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
  public persons = [{name:"malay",age:23,designation:"software engineer",hobbies:["writing","playing","singing"]},
                    {name:"gurprit",age:25,designation:"senior software engineer",hobbies:["reading","coding","gaming"]} ,
                    {name:"anshuman",age:24,designation:"software engineer",hobbies:["dancing","travelling","eating"]}    ]
  constructor() { }

  ngOnInit(): void {
  }

}
