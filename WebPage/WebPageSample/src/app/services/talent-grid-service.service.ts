import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TalentGridServiceService {
url:string;
growth_platform:string;
month:string;
year:string;

data:Array<{
  practice:string;
  plan1Q19:number;
  actual:number;
  dropped:number;
  underStudy:number;
  pass:number;
  fail:number;
  reskilled:number;
  assigned:number;
  separated:number;
  topTalented:number;
  selfSufficiently:number;
  futureProofing:number;
  benchManagement:number;
}>;


  constructor(private httpClient:HttpClient) { }

response:any;
  getData(){

    this.url = 'http://talent-grid.w3ibm.mybluemix.net/api/v1/getAllData';
    this.httpClient.get(this.url).subscribe(resp => {
    this.response = resp;
        });
        console.log(this.httpClient.get(this.url));
    return this.httpClient.get(this.url);

    // return this.http.get(this.url)
    // .map(res => res.json());

 
  }










}
