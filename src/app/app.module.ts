import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageCropperModule } from "ngx-image-cropper";
import { AuthService } from "../../src/app/services/auth.service";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule
} from "@angular/material";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AdvicesComponent } from "./advices/advices.component";
import { SliderComponent } from "./slider/slider.component";
import { FaqComponent } from "./faq/faq.component";
import { MediaComponent } from "./media/media.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    AdvicesComponent,
    SliderComponent,
    FaqComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ImageCropperModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
