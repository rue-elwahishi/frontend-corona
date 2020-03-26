import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdvicesComponent } from "./advices/advices.component";
import { SliderComponent } from "./slider/slider.component";
import { FaqComponent } from "./faq/faq.component";
import { MediaComponent } from "./media/media.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "advices", component: AdvicesComponent, canActivate: [AuthGuard] },
  { path: "Ads", component: SliderComponent, canActivate: [AuthGuard] },
  { path: "FAQ", component: FaqComponent, canActivate: [AuthGuard] },

  { path: "login", component: LoginComponent },
  { path: "upload", component: MediaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
