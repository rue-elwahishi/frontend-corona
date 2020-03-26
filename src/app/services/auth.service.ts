import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, mapTo } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  url: String = "api/v1/adminboard/login";

  constructor(private http: HttpClient) {}

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

  getAdminBoard() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://139.162.161.31/corona-backend/public/api/v1/adminboard", {
        headers: headers
      })
      .pipe(map(respone => respone));
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  logOut() {
    this.authToken = null;
    localStorage.clear();
  }
}
