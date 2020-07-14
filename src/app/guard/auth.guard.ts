import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class UserService {
  isLoggedIn: boolean = false;
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      window.alert(`You don't have permission to view this page.`);
      this.router.navigate(["form"]);
      return false;
    }
  }
}
