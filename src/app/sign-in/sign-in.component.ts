import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  visible = false;
  user = new User();
  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
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
