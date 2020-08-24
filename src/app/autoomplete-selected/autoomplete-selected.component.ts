import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-autoomplete-selected',
  templateUrl: './autoomplete-selected.component.html',
  styleUrls: ['./autoomplete-selected.component.css']
})
export class AutoompleteSelectedComponent {

  model: string;
  source: SohoAutoCompleteSource = [
    'Hello',
    'World',
    'Alice',
    'Bob',
  ];
  secondsSinceLastSelect: Observable<number>;
  template = `<script type="text/html">
  <li id="{{listItemId}}" {{#hasValue}} data-value="{{value}}" {{/hasValue}} role="listitem">
    <a tabindex="-1">
      <span class="display-value">Custom template {{{label}}}</span>
    </a>
  </li>
</script>`;

  resetSelectCount() {
    this.secondsSinceLastSelect = interval(1000).pipe(map(n => n + 1), startWith(0));
  }
}
