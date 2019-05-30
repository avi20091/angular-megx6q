import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';
import { ChildThreeComponent } from './childthree.component';
import { PageOneComponent } from './pageone.component';
import { PageTwoComponent } from './pagetwo.component';
import { PageThreeComponent } from './pagethree.component';
import { TopComponent } from './top.component';

export const appRoutes:Routes=[
  { path:'', component: PageOneComponent,
    children:[{ path: 'child_one', component: ChildOneComponent}]  
  },
  { path:'page_two', component: PageTwoComponent,
    children:[{ path: 'child_two', component: ChildTwoComponent}]
  },
  { path:'page_three', component: PageThreeComponent, 
    children:[{ path:'child_three', component: ChildThreeComponent}]
  }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,
                  RouterModule.forRoot(appRoutes)
                 ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  ChildOneComponent,
                  ChildTwoComponent,
                  ChildThreeComponent,
                  PageOneComponent,
                  PageTwoComponent,
                  PageThreeComponent,
                  TopComponent
                   ],
  bootstrap:    [ TopComponent ]
})
export class AppModule { }
