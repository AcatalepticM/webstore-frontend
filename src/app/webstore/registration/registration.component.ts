import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/UserService';
import {User} from '../models/users.model';
import {Router} from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private users: User[] = [];
  private user: User;

  constructor(private userService: UserService, public router: Router) {
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
   this.router.navigate(['/login']);
  }
}
