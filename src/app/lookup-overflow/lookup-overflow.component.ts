import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SohoComponentsModule } from "ids-enterprise-ng";

@Component({
  selector: "app-lookup-overflow",
  standalone: true,
  imports: [CommonModule, SohoComponentsModule],
  templateUrl: "./lookup-overflow.component.html",
  styleUrls: ["./lookup-overflow.component.css"],
})
export class LookupOverflowComponent {}
