import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './password-validator';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  visible = false;
  user = new User();
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    addressForm: this.fb.group({
      address: [''],
      zip: [''],
      city: [''],

    })
  });




    constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.visible = true;
}
}
