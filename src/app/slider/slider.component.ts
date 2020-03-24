import { Component, OnInit } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  title = "angular-image-uploader";
  imageChangedEvent: any = "";
  croppedImage: any = "";
  default: any =
    "https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841";

  constructor() {}

  ngOnInit() {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}
