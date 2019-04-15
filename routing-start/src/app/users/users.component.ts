import { Component, Output ,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, } from '@angular/router';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private router:Router,private route:ActivatedRoute) { }
userDetails=new UserComponent(this.route);
  users = [
    {
      id: 1,
      name: 'Chandu',
      prof:'Developer'
    },
    {
      id: 2,
      name: 'Vishal',
      prof:'Journalist'
    },
    {
      id: 3,
      name: 'Satya',
      prof:'Traveller'
    }
  ];


  sendData(event:any){
    console.log(event);
        //if(event == 'Chandu'){
          //this.userDetails.getData(this.users[0].name,this.users[0].prof);
          this.router.navigate(['/user',event.id],{queryParams: { name:event.name ,prof: event.prof } });  
    //}
    // if(event == 'Vishal'){
    //   //this.userDetails.getData(this.users[1].name,this.users[1].prof);
    //   this.router.navigate(['/user',2],{queryParams: { name:this.users[1].name ,prof: this.users[1].prof },skipLocationChange:true });  //{queryParams: { id: 1 } });
      
    //   }
    //   if(event == 'Satya'){
    //    // this.userDetails.getData(this.users[2].name,this.users[2].prof);
    //     this.router.navigate(['/user',3],{queryParams: { name:this.users[2].name ,prof: this.users[2].prof },skipLocationChange:true });          
    //     }
  }

}
