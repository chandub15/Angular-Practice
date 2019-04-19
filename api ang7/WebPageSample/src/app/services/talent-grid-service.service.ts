import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TalentGridServiceService {
url:string;
// growth_platform:string;
// month:string;
// year:string;

// data:Array<{
//   practice:string;
//   plan1Q19:number;
//   actual:number;
//   dropped:number;
//   underStudy:number;
//   pass:number;
//   fail:number;
//   reskilled:number;
//   assigned:number;
//   separated:number;
//   topTalented:number;
//   selfSufficiently:number;
//   futureProofing:number;
//   benchManagement:number;
// }>;


  constructor(private httpClient:HttpClient) { }

response:any;
private errorStatus: string;
private errorBody: string;
  getData(){

    this.url = 'http://talent-grid.w3ibm.mybluemix.net/api/v1/getAllData';
    this.httpClient.get(this.url).subscribe(resp => {
    this.response = resp;
         });
        console.log(this.httpClient.get(this.url));
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));

    // return this.http.get(this.url)
    // .map(res => res.json());

 
  }

  // private handleError(error: any): Promise<Array<any>> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  //   }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.log("An error occured :", error.error.message);
      } else {
        this.errorStatus = "URL not found";
        console.log("Error msg", this.errorStatus);
       // this.errorBody = `${error.error}`;
        console.log(
          `Backened returned code ${error.status}`// + `body was :${error.error}`
        );
      }
      return "URL not found";
    }








}
