import { Component, OnInit } from '@angular/core';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  searchTerm = '';
  show = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService);
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
