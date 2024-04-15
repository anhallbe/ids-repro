import { Component, OnInit } from "@angular/core";
import { SohoHomePageModule, SohoInputModule, SohoLabelModule } from "ids-enterprise-ng";

@Component({
    selector: "app-homepage-editing",
    templateUrl: "./homepage-editing.component.html",
    styleUrls: ["./homepage-editing.component.css"],
    standalone: true,
    imports: [
        SohoHomePageModule,
        SohoLabelModule,
        SohoInputModule,
    ],
})
export class HomepageEditingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
