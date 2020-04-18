import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import {  Router } from '@angular/router';

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"],
})
export class AuthPageComponent implements OnInit {
  @ViewChild("AuthForm") AuthForm: NgForm;
  authObservable = new Observable();
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage = null;
  constructor(private authService: AuthService,
  private route: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const email = this.AuthForm.value.email;
    const password = this.AuthForm.value.password;
    // Sign Up
    if (!this.isLoginMode) {
      this.authObservable = this.authService.signUp(email, password);
    } else {
      this.authObservable = this.authService.signIn(email, password);
    }

    this.isLoading = true;
    this.authObservable.subscribe(
      (params: any) => {
        this.isLoading = false;
        // this.route.navigate(['./recipe'])

      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = error;
        console.error(error);
      }
    );
    form.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  closeModal(){
    this.errorMessage = null
  }
}
