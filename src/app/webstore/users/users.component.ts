import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/UsersService';
import {User} from '../models/users.model';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[] = [];
  private user: User;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers()
      .subscribe(
        (users: any[]) => {
          this.users = users;
        },
        (error) => console.log(error)
      );
  }

  onSubmit(f) {
   this.user = new User(f.value.username, f.value.email, f.value.password);
   this.userService.createUser(this.user);
  }
}
