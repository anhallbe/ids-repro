import { Component, OnInit } from "@angular/core";
import { SohoAccordionModule, SohoHomePageModule } from "ids-enterprise-ng";

@Component({
    selector: "app-accordion-focus",
    templateUrl: "./accordion-focus.component.html",
    styleUrls: ["./accordion-focus.component.css"],
    standalone: true,
    imports: [SohoHomePageModule, SohoAccordionModule],
})
export class AccordionFocusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
