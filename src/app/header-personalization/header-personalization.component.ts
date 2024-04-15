
import { Component } from "@angular/core";
import { SohoComponentsModule } from "ids-enterprise-ng";

@Component({
  selector: "app-header-personalization",
  standalone: true,
  imports: [SohoComponentsModule],
  templateUrl: "./header-personalization.component.html",
  styleUrls: ["./header-personalization.component.css"],
})
export class HeaderPersonalizationComponent {}
