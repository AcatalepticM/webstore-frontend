import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../webstore/models/users.model';


@Injectable()
export class UserService {
  private userUrl = '/api/user/';

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get(this.userUrl);
  }

  getUser(username) {
    return this.http.get(this.userUrl + username );

  }

  createUser(user: User) {
    return this.http.post(this.userUrl + 'register', user).subscribe(
      (error) => console.log(error)
    );
  }

}
