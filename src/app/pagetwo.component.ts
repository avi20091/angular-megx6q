import { Component } from '@angular/core';

@Component({
  selector: "pagetwo",
  templateUrl: "pagetwo.component.html"
})
export class PageTwoComponent{
  private page_two:string;
  constructor(){
    this.page_two="I am from Page Two Component....!!!!";
  }
}