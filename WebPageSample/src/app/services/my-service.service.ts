import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SuggestForm } from '../classes/form';

@Injectable({
  providedIn: 'root'
})
export class MyServiceClass {

  private infos: Array<SuggestForm>;
  private messageSource: BehaviorSubject<Array<SuggestForm>> = new BehaviorSubject<Array<SuggestForm>>(null);;
  currentMessage = this.messageSource.asObservable();

  constructor() {   }

  myMethod(data) {
    this.messageSource.next(data);
 }
}
