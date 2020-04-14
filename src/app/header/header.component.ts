import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user = null;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.userSubject.subscribe(
      data => this.user = data
    )
  }

  storageRecipes() {
    this.dataStorageService.storageRecipes();
  }
  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
