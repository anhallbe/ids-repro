import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  model: string;
  dataset = [
    {
      foo: 'Value 1',
    },
    {
      foo: 'Value 2',
    },
    {
      foo: 'Value 3',
    },
  ];
  columns: SohoDataGridColumn[] = [
    {
      id: 'foo',
      name: 'Foo',
      field: 'foo',
      width: 140
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
