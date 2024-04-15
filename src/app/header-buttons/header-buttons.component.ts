
import { Component } from "@angular/core";
import { SohoComponentsModule } from "ids-enterprise-ng";

@Component({
  selector: "app-header-buttons",
  standalone: true,
  imports: [SohoComponentsModule],
  templateUrl: "./header-buttons.component.html",
  styleUrls: ["./header-buttons.component.css"],
})
export class HeaderButtonsComponent {}
