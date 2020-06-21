import { Component } from "@angular/core";
import { AuthService } from "../core/auth.service";
import { Router, Params } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "page-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.scss"],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  tryLogin(data) {
    this.authService.doLogin(data).then(
      (res) => {
        this.router.navigate(["/recipes"], { replaceUrl: true });
      },
      (err) => {}
    );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(
      (res) => {
        this.router.navigate(["/recipes"], { replaceUrl: true });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin().then(
      (res) => {
        this.router.navigate(["/recipes"], { replaceUrl: true });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
