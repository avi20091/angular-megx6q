import { Component } from '@angular/core';
@Component({
  selector: "childone",
  templateUrl: "childone.component.html"
})
export class ChildOneComponent{
  private child_one:string;
  constructor(){
    this.child_one="I am from Child One Component....!!!!";
  }
}