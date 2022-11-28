import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'malay modi';
  fruitsarray = ["Apple","Banana","Chickoo","Orange"]
  empobj = {
    name: "malay",
    qualification: "M.C.A.",
    age: 23,
    skills: "Dotnet and Angular"
  }

  changeData()
  {
    this.name="Follower of God"
  }
  public msg = "";



  //this is for example of passing data from one child component to another child component
  currentMsgFromChildToChild2 : any;
  fwdMsgToSib2($event:any) { 
    this.currentMsgFromChildToChild2 = $event;
    console.log(this.currentMsgFromChildToChild2)
   }
}
