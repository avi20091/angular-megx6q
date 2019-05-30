import { Component } from '@angular/core';

@Component({
  selector: "pagethree",
  templateUrl: "pagethree.component.html"
})
export class PageThreeComponent{
  private page_three:string;
  constructor(){
    this.page_three="I am from Page Three Component....!!!!";
  }
}