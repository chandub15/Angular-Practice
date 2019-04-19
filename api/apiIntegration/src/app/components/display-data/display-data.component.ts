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
  ngOnInit() {
  }
 
  index:number;
  private talentData;

displaydata(){
  console.log("hei");
  this.talentData=new  Response();
  this.talentService.getData().subscribe(data => {
      console.log(data);
      this.talentData=data;
      //console.log(this.talentData.config);
       // console.log("objectabc:"+Object.keys(this.talentData.config));
    
      //  console.log(Object.keys(this.talentData.responseData[0].data[0]));



      //this.dataT=JSON.stringify(this. talentData.responseData[0].data);

  });
 // console.log(this.talentData);
}

keysConfig() : Array<string> {
 // console.log("array")
  return Object.keys(this.talentData.config);
  }

  keysTalentData(): Array<string> {
   // console.log(Object.keys(this.talentData.responseData[0].data));
    return Object.keys(this.talentData.responseData[0].data);
    }


    
  keysData(i:string): Array<string> {
    this.index=parseInt(i);
    // console.log(this.index);
    // console.log(Object.keys(this.talentData.responseData[0].data[this.index]));
    // console.log(Object.values(this.talentData.responseData[0].data[this.index]));
    return Object.keys(this.talentData.responseData[0].data[this.index]);
    }
}
