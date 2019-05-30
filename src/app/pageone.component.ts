import { Component } from '@angular/core';

@Component({
  selector: "pageone",
  templateUrl: "pageone.component.html"
})
export class PageOneComponent{
  private page_one:string;
  constructor(){
    this.page_one="I am from Page One Component....!!!!";
  }
}