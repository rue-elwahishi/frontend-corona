import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { ValidateService } from "../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { from } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private flashmessage: FlashMessagesService,
    private router: Router,
    private validate: ValidateService
  ) {}

  ngOnInit() {}

  signIn(form: NgForm) {
    if (!this.validate.validateLogin(form.value)) {
      this.flashmessage.show("please fill all fields", {
        cssClass: "alert-danger",
        timeout: 5000
      });
      return false;
    }
    if (!this.validate.validateEmail(form.value.email)) {
      this.flashmessage.show("please insert valid email", {
        cssClass: "alert-danger",
        timeout: 5000
      });
      return false;
    }
    this.auth.authenticateUser(form.value).subscribe((data: any) => {
      console.log(data);
      if (data.code === 1000) {
        this.auth.storeUserDate(data.token);
        this.router.navigate(["home"]);
        location.reload();
      } else
        this.flashmessage.show(data.msg, {
          cssClass: "alert-danger",
          timeout: 5000
        });
      this.router.navigate([""]);
    });
  }
}
