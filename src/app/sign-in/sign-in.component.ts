import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = new User();
  userForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
    address: [''],
    zip: [''],
    city: [''],
    });




    constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.userForm.value);
}
}
