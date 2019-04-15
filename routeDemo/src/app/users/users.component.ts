import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Chandu',
    },
    {
      id: 2,
      name: 'Vishal',
    },
    {
      id: 3,
      name: 'Satya',
    }
  ];
}
