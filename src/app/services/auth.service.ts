import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  url: String = "api/v1/adminboard/login";

  constructor(private http: HttpClient) {}

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("api/v1/login", user, { headers: headers })
      .subscribe((data) => {
        console.log(data)
      })
  }
}
