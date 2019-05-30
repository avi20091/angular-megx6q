import { Component } from '@angular/core';
@Component({
  selector: "childthree",
  templateUrl: "childthree.component.html"
})
export class ChildThreeComponent{
  private child_three:string;
  constructor(){
    this.child_three="I am from Child Three Component....!!!!";
  }
}