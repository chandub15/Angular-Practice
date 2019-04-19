import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import {  Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SuggestionService } from 'src/app/services/suggestions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuggestForm } from 'src/app/classes/form';
import {  MyServiceClass } from 'src/app/services/my-service.service';

// import { validateFunc } from './validateFunc';


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers:[SuggestionService]
})
export class SuggestionsComponent implements OnInit {
  result: Array<SuggestForm>;
  results: SuggestForm[][];

  suggestForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private myService: MyServiceClass)  { 
    this.results = [];
  }

  ngOnInit() {
  
    this.suggestForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      comments: ['', Validators.required]
      
  });
  }

  get f() { return this.suggestForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.suggestForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.suggestForm.value)); 
   
    this.result = Object.assign({},
      this.suggestForm.value);
      this.results.push(this.result);
      this.myService.myMethod(this.results);
      console.log( this.results);
}


}

