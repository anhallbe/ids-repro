import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoAutoCompleteModule, SohoLabelModule } from "ids-enterprise-ng";

@Component({
    selector: "app-autocomplete-xss",
    templateUrl: "./autocomplete-xss.component.html",
    styleUrls: ["./autocomplete-xss.component.css"],
    standalone: true,
    imports: [
        SohoLabelModule,
        SohoAutoCompleteModule,
        FormsModule,
    ],
})
export class AutocompleteXssComponent {
  selected: string;
  source: SohoAutoCompleteSource = [
    "Hello",
    "World",
    "<script>alert(1)</script>xss",
  ];
}
