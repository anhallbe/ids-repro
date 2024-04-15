import { Component, ViewChild } from "@angular/core";
import { SohoButtonModule, SohoDataGridComponent, SohoDataGridModule, SohoSplitterModule } from "ids-enterprise-ng";

@Component({
    selector: "app-datagrid-splitter",
    templateUrl: "./datagrid-splitter.component.html",
    styleUrls: ["./datagrid-splitter.component.css"],
    standalone: true,
    imports: [SohoButtonModule, SohoDataGridModule, SohoSplitterModule],
})
export class DatagridSplitterComponent  {
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
}
