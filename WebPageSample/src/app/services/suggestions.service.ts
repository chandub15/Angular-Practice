// import { Injectable, EventEmitter } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Suggestions } from '../classes/suggestions.model';
// // import { HttpClientModule }    from '@angular/common/http';
// const INIT_DATA=[];
// const BASE_URL="http://localhost:4200/suggest"
// @Injectable()
// export class SuggestionService {
//     recipeSelected = new EventEmitter<Suggestions>();
//  private suggestions:Suggestions[]=[
//      new Suggestions('chandu1','cb1@gmail.com','subject1','comments1'),
//      new Suggestions('chandu2','cb2@gmail.com','subject2','comments2')

//  ];
//   constructor(private httpClient:HttpClient) { }


//   getSuggestions() {
//     return this.suggestions.slice();
//   }
// }

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { stringify } from '@angular/compiler/src/util';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_todolist';
@Injectable()
export class SuggestionService {
     anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(name:string,email:string,subject:string,comments:string): void {
          
          // get array of tasks from local storage
          const currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList.push({
              name:name,
              email:email,
              subject:subject,
              comments:comments
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
          
     }
}
