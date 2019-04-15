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

  ngOnInit() {
  }
 
  private talentData;

displaydata(){
  console.log("hei");
  this.talentData=new  Response();
  this.talentService.getData().subscribe(data => {
      console.log(data);
      this.talentData=data;
      console.log(this.talentData.responseData[0].growth_platform);
  });
  console.log(this.talentData);
}

}
