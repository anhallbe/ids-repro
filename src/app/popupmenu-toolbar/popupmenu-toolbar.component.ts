import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";

@Component({
  selector: "app-popupmenu-toolbar",
  templateUrl: "./popupmenu-toolbar.component.html",
  styleUrls: ["./popupmenu-toolbar.component.css"],
})
export class PopupmenuToolbarComponent implements OnInit {
  @ViewChild(SohoDataGridComponent) datagrid: SohoDataGridComponent;

  source = (
    request: SohoDataGridSourceRequest,
    response: SohoDataGridResponseFunction,
  ) => {};
  gridOptions: SohoDataGridOptions = {
    columns: [
      {
        width: 50,
        id: "selectionCheckbox",
        resizable: false,
        sortable: false,
        formatter: Soho.Formatters.SelectionCheckbox,
        align: "center",
      },
      { field: "product" },
      { field: "quantity" },
    ],
    selectable: "multiple",
    dataset: [
      {
        product: "Banana",
        quantity: 1,
      },
      {
        product: "Apple",
        quantity: 10,
      },
      {
        product: "Orange",
        quantity: 5,
      },
    ],

    rowHeight: "medium",
    disableRowDeactivation: true,
    clickToSelect: false,
    isList: true,
    enableTooltips: true,
    allowSelectAcrossPages: true,
    showNewRowIndicator: false,
    columnSizing: "both",
    source: this.source,
  };

  constructor() {}

  ngOnInit(): void {}
}
