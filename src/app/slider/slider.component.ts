import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  default: any =
    "https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841";

  constructor() {}

  ngOnInit() {}
  upload(e: any, img) {
    var input = e.target;
    console.log(e);

    if (input.files && input.files[0]) {
      img.src = URL.createObjectURL(input.files[0]);
    }
  }
}
