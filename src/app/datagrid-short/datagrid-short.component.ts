import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoButtonModule, SohoDataGridComponent, SohoDataGridModule } from "ids-enterprise-ng";

@Component({
    selector: "app-datagrid-short",
    templateUrl: "./datagrid-short.component.html",
    styleUrls: ["./datagrid-short.component.css"],
    standalone: true,
    imports: [SohoButtonModule, SohoDataGridModule],
})
export class DatagridShortComponent implements OnInit {
  @ViewChild(SohoDataGridComponent) grid: SohoDataGridComponent;

  gridOptions: SohoDataGridOptions = {
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

  constructor() {}

  ngOnInit(): void {}

  applyOptions() {
    this.gridOptions.rowHeight = "short";
    this.grid.updated();
  }
}