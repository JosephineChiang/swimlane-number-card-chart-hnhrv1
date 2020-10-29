import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { single } from "./data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  single: any[];
  view: any[] = [650, 150];

  colorScheme = {
    domain: ["#00A2E8", "#5AA454", "#3F48CC", "#A349A4"]
  };
  cardColor: string = "#F2F2F2";

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
