import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/users.model';


@Injectable()
export class UsersService {
  private userUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get(this.userUrl);
  }

  createUser(user: User) {
    return this.http.post(this.userUrl, user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
