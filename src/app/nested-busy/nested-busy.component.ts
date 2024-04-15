import { Component, OnInit } from "@angular/core";
import { SohoBusyIndicatorModule } from "ids-enterprise-ng";

@Component({
    selector: "app-nested-busy",
    templateUrl: "./nested-busy.component.html",
    styleUrls: ["./nested-busy.component.css"],
    standalone: true,
    imports: [SohoBusyIndicatorModule],
})
export class NestedBusyComponent implements OnInit {
  busy1: boolean;
  busy2: boolean;

  constructor() {}

  ngOnInit() {
    this.busy2 = true;

    setTimeout(() => (this.busy2 = false), 100);
  }
}
