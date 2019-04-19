import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from 'src/app/services/my-service.service';
import { SuggestForm } from 'src/app/classes/form';



@Component({
  selector: 'app-view-suggestions',
  templateUrl: './view-suggestions.component.html',
  styleUrls: ['./view-suggestions.component.css']
})
export class ViewSuggestionsComponent implements OnInit {
  receiver: SuggestForm;
  //pushing: Array<SuggestForm>;
  //resArr:any=[];

  constructor(private myService: MyServiceClass) {
  }
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.myService.currentMessage.subscribe((data: any) => {
      console.log("res",data);
      this.receiver = data;
      console.log(this.receiver);
    });
  }

}

