import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

public displayname = '';




  /*getName(value:string,event:any){
    if(event.keyCode!=8)
       this.displayname = value;
  
    console.log(value)
  }*/

   displayfullname(firstname:string,lastname:string)
   {
       alert('your fullname is ' + firstname + lastname)
   }

  constructor() { }

  ngOnInit(): void {
  }

}
