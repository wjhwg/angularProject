import { CanActivate } from "@angular/router";


export class GuardComponent implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('用户未登陆！');
    } else {
      return loggedIn;
    }
  }
}
