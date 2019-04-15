import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import {Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
  { 
    path : 'users',
    component: UsersComponent,
    
  },
  { 
    path : 'user/:id',  
    component: UserComponent
    
  },
  { 
    path : 'home',
    component: HomeComponent
  },
  { 
    path : '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
