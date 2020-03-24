import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdvicesComponent } from "./advices/advices.component";
import { SliderComponent } from "./slider/slider.component";
import { FaqComponent } from "./faq/faq.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, children: [] },
  { path: "advices", component: AdvicesComponent },
  { path: "Ads", component: SliderComponent },
  { path: "FAQ", component: FaqComponent },

  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
