import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid-short',
  templateUrl: './datagrid-short.component.html',
  styleUrls: ['./datagrid-short.component.css']
})
export class DatagridShortComponent implements OnInit {

  gridOptions: SohoDataGridOptions;

  constructor() { }

  ngOnInit(): void {
  }

  applyOptions() {
    this.gridOptions = {
      rowHeight: "short",
      columns: [
        {
          name: "Name",
          field: "name",
        },
        {
          name: "Description",
          field: "description",
        },
      ],
      dataset: [
        {
          name: "Name 1",
          description: "Description 1",
        },
        {
          name: "Name 2",
          description: "Description 2",
        },
        {
          name: "Name 3",
          description: "Description 3",
        },
      ],
    };
  }
}
