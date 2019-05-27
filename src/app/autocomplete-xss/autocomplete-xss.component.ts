import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete-xss',
  templateUrl: './autocomplete-xss.component.html',
  styleUrls: ['./autocomplete-xss.component.css']
})
export class AutocompleteXssComponent {

  selected: string;
  source: SohoAutoCompleteSource = [
    'Hello',
    'World',
    '<script>alert(1)</script>xss'
  ];
}
