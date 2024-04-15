import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { SohoApplicationMenuModule, SohoHeaderModule, SohoIconModule, SohoToolbarFlexModule } from "ids-enterprise-ng";
import { PersonalizeMenuComponent } from "./personalize-menu/personalize-menu.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    standalone: true,
    imports: [
        SohoIconModule,
        SohoHeaderModule,
        SohoToolbarFlexModule,
        PersonalizeMenuComponent,
        SohoApplicationMenuModule,
        RouterLink,
        RouterOutlet,
    ],
})
export class AppComponent implements OnInit {
  idsVersion: string;
  idsNgVersion: string;

  ngOnInit() {
    const htmlElement = document.querySelector("html");
    this.idsVersion = htmlElement.getAttribute("data-sohoxi-version");
    this.idsNgVersion = htmlElement.getAttribute(
      "data-ids-enterprise-ng-version",
    );
    console.log(this.idsVersion, this.idsNgVersion);
  }
}
