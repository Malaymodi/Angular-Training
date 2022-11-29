import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {


  public name:string = "";
  public age:number = 0;
  public email:string = "";

  constructor() { }

  save(formData:any)
  {
    this.name = formData.value.name;
    this.age = formData.value.age;
    this.email = formData.value.email;
    console.log(formData.value)
    console.log("Your Name is " + this.name)
    console.log("Your Age  is " + this.age)
    console.log("Your Email is " + this.email)
  }

  onReset(form:any)
  {
       form.reset()
  }

  ngOnInit(): void {
  }
          
}
