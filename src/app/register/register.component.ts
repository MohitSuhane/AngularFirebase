import { Component } from "@angular/core";
import { AuthService } from "../core/auth.service";
import { Router, Params } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  tryRegister(data) {
    this.authService.doRegister(data).then(
      (res) => {
        this.errorMessage = "";
        this.successMessage = "Your account is registered";
      },
      (err) => {
        this.errorMessage = err.message;
        this.successMessage = "";
      }
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
}
