import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"],
})
export class AuthPageComponent implements OnInit {
  @ViewChild("AuthForm") AuthForm: NgForm;
  isLoginMode: boolean;
  isLoading: boolean = false;
  errorMessage = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log("this.AuthForm", this.AuthForm);
    const email = this.AuthForm.value.email;
    const password = this.AuthForm.value.password;
    // Sign Up
    if (!this.isLoginMode) {
      this.isLoading = true;
      this.authService.signUp(email, password).subscribe(
        (params: any) => {
          this.isLoading = false;
          console.log("params", params);
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error;
          console.error(error);
        }
      );
    }
    //Call sign in End point
    else {
      this.isLoading = true;
      this.authService.signIn(email, password).subscribe(
        (params: any) => {
          this.isLoading = false;
          console.log("LOG IN", params);
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error;
          console.error(error);
        }
      );
    }
    form.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
