import { Component } from "@angular/core";
import { AuthService } from "../core/auth.service";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService,
    private router: Router
  ) {}
}
