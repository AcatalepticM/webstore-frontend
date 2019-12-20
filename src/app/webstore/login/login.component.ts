import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../models/users.model';
import {UserService} from '../../services/UserService';
import {AuthService} from '../../services/auth.service';
import * as Bcrypt from 'bcrypt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = new User('', '', '');
  private username: string;
  private password: string;
  private hash: string;

  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  constructor(private usersService: UserService,
              private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder/*,
              private bcrypt: Bcrypt*/) {
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.getFormFields();
    this.findUser();
    this.validatePassword();
    /*this.hash = this.bcrypt.hashSync(this.password, 10);
    console.log('ALGNE LOGIN PASS: ' + this.password);
    console.log('HASHITUD PASS: ' + this.hash);
    console.log('DB HASHITUD PASS STRING: ' + this.user.password);*/
  }

  getFormFields() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;

    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
  }

  findUser() {
    this.usersService.getUser(this.username).subscribe(
      (user: any) => {
        this.user = user;
      }
    );
  }

  validatePassword() {
    if (this.password === this.user.password) {
      this.authService.login(this.user);
      this.router.navigate(['/admin']);
    }
  }


  /*onSubmit(f) {
    this.username = f.value.username;
    this.password = f.value.password;

    this.usersService.getUser(this.username).subscribe(
      (user: any) => {
        this.user = user;
      }
    );
  }*/
}
