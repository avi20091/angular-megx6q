import { Component } from '@angular/core';
@Component({
  selector: "childtwo",
  templateUrl: "childtwo.component.html"
})
export class ChildTwoComponent{
  private child_two:string;
  constructor(){
    this.child_two="I am from Child Two Component....!!!!";
  }
}