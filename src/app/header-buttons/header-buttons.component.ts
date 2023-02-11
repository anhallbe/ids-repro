import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SohoComponentsModule } from "ids-enterprise-ng";

@Component({
  selector: "app-header-buttons",
  standalone: true,
  imports: [CommonModule, SohoComponentsModule],
  templateUrl: "./header-buttons.component.html",
  styleUrls: ["./header-buttons.component.css"],
})
export class HeaderButtonsComponent {}
