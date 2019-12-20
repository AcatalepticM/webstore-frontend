import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/UserService';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted = false;

  constructor(private userService: UserService,
              public router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue]
      }, {
        validator: this.mustMatch('password', 'passwordConfirm')
      }
    );
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmitRegister() {
    this.isSubmitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    this.userService.createUser(this.registrationForm.value);
    this.router.navigateByUrl('/login');

  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onReset() {
    this.isSubmitted = false;
    this.registrationForm.reset();
  }

  /*onSubmit(f) {
   this.user = new User(f.value.username, f.value.email, f.value.password);
   this.userService.createUser(this.user);
   this.router.navigate(['/login']);
  }*/
}
