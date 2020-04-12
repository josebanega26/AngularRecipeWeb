import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  @ViewChild('AuthForm') AuthForm: NgForm
  isLoginMode: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('this.AuthForm', this.AuthForm)
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}
