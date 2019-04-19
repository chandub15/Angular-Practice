import { Component, OnInit } from '@angular/core';
import { TalentGridServiceService } from 'src/app/services/talent-grid-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(private talentService:TalentGridServiceService,private httpClient:HttpClient) { }
  dataT:string;
  urlExists:string;
  responseIndex:number;
  ngOnInit() {
  }
 
  index:number;
  private talentData;
  private configData;
  private responseData;
  private talentIndex;

displaydata(){
  console.log("hei");
  this.talentData=new  Response();
  this.talentService.getData().subscribe(data => {
   // console.log("inside");
      console.log(data);
    
      this.talentData=data;      //console.log(this.talentData.config);
        //console.log(Object.keys(this.talentData.responseData));
        this.responseData=this.talentData.responseData;
        this.configData=this.talentData.config;
       // console.log(this.responseData[0]);
      //  console.log(Object.keys(this.talentData.responseData[0].data[0]));


      //this.dataT=JSON.stringify(this. talentData.responseData[0].data);
      
  });
 // console.log(this.talentData);
}

keysConfig() : Array<string> {
 // console.log("array")
  return Object.keys(this.talentData.config);
  }

  keysTalentData(keysResponse:string): Array<string> {
    this.talentIndex=parseInt(keysResponse);
    console.log(Object.keys(this.responseData[this.talentIndex].data));
   // console.log(Object.keys(this.talentData.responseData[0].data));
    return Object.keys(this.responseData[this.talentIndex].data);
    }


    
  keysData(i:string): Array<string> {
    this.index=parseInt(i);
    // console.log(this.index);
    // console.log(Object.keys(this.talentData.responseData[0].data[this.index]));
    console.log("keys")
     console.log(this.talentData.responseData[0].data[this.index]);
    return Object.keys(this.responseData[0].data[this.index]);
    }

    keysResponseData():Array<string> {
      return Object.keys(this.talentData.responseData);
   }



   keysResponseIndex(keysResponse:string): Array<string> {
      this.responseIndex=parseInt(keysResponse);
      console.log("in response")
      console.log(this.talentData.responseData[this.responseIndex]);
      return Object.keys(this.talentData.responseData[this.responseIndex]);
   }
}

