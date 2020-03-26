import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  url: String = "api/v1/adminboard/login";

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  authenticateUser(user) {
    console.log(user, "user here");
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://139.162.161.31/corona-backend/public/api/v1/login", user, {
        headers: headers
      })
      .pipe(map(respone => respone));
  }

  storeUserDate(token) {
    localStorage.setItem("id_token", token);

    this.authToken = token;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }
  loggedIn() {
    return this.jwtHelper.isTokenExpired();
  }
  logOut() {
    this.authToken = null;
    localStorage.clear();
  }
}
