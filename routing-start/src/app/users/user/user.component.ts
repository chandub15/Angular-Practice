import { Component, OnInit, AfterViewInit ,ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  // //@ViewChild(UsersComponent) usersData;
   
  // @Input() users:{id:number,name:string,prof:string}[];
  // name:string;
  // id:number;

  name:string;
  prof:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    )

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
        this.prof= params['prof'];
    });

    // console.log("hei "+ this.user.id);
    // console.log(this.users[0].id );
       
  //   console.log("id"+this.user.id);
  //   console.log(this.users[0].id);
  
  //     if(this.user.id==this.users[0].id){
  //       //this.users=this.users;
  //       console.log("chan"+ this.users[0].name);
  //     }
  // //  this.sendData(this.user.id);


  //   console.log("back");
  }


  getData(name:string,prof:string){
    console.log("heibdhjew");
    this.name=name;
    this.prof=prof;
    console.log(this.name+"\t"+this.prof);
  }

}
  // sendData(id:number){
  //   console.log("hei"+this.id);
  //   console.log("hee"+this.users[0].id);
  //   if(this.id==this.users[0].id){
  //     //this.users=this.users;
  //     console.log("chan"+ this.users[0].name);
  //   }
  
