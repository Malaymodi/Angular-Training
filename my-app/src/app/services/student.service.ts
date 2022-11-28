import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudents() {
    return [
      { name: "malay", age: 21, qualification: "M.C.A." },
      { name: "parth", age: 22, qualification: "B.C.A." },
      { name: "nikunj", age: 23, qualification: "B.Tech" }
    ]
  }
}
