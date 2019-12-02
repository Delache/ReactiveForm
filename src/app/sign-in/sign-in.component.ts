import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = new User();
  username = new FormControl('Name');
  email = new FormControl('Email');
  password = new FormControl('Password');
  address = new FormControl('Address');
  zip = new FormControl('');
  city = new FormControl('City');




  constructor() { }

  ngOnInit() {
  }
  newUser() {
    this.user.username = this.username.value;
    this.user.email = this.password.value;
    this.user.password = this.address.value;
    this.user.zip = this.zip.value;
    this.user.city = this.city.value;
    console.log(this.user);

  }
}
