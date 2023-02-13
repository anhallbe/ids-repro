import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SohoComponentsModule } from "ids-enterprise-ng";

@Component({
  selector: "app-widget-colors",
  standalone: true,
  imports: [CommonModule, SohoComponentsModule],
  templateUrl: "./widget-colors.component.html",
  styleUrls: ["./widget-colors.component.css"],
})
export class WidgetColorsComponent {}
