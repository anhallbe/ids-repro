import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoAutoCompleteModule, SohoLabelModule } from "ids-enterprise-ng";
import { Observable, interval } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
    selector: "app-autoomplete-selected",
    templateUrl: "./autoomplete-selected.component.html",
    styleUrls: ["./autoomplete-selected.component.css"],
    standalone: true,
    imports: [
        SohoLabelModule,
        SohoAutoCompleteModule,
        FormsModule,
        AsyncPipe,
    ],
})
export class AutoompleteSelectedComponent {
  model: string;
  source: SohoAutoCompleteSource = ["Hello", "World", "Alice", "Bob"];
  secondsSinceLastSelect: Observable<number>;
  template = `<script type="text/html">
  <li id="{{listItemId}}" {{#hasValue}} data-value="{{value}}" {{/hasValue}} role="listitem">
    <a tabindex="-1">
      <span class="display-value">Custom template {{{label}}}</span>
    </a>
  </li>
</script>`;

  resetSelectCount() {
    this.secondsSinceLastSelect = interval(1000).pipe(
      map((n) => n + 1),
      startWith(0),
    );
  }
}
