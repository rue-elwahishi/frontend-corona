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
    console.log(user, "user here")
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://139.162.161.31/corona-backend/public/api/v1/login", user, {
        headers: headers
      })
      .pipe(map(respone => console.log(respone)));
  }
}
