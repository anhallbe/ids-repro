import { Component, OnInit } from "@angular/core";
import { SohoModalDialogService } from "ids-enterprise-ng";

import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: "app-datagrid-dialog",
  templateUrl: "./datagrid-dialog.component.html",
  styleUrls: ["./datagrid-dialog.component.css"],
})
export class DatagridDialogComponent implements OnInit {
  constructor(private dialogService: SohoModalDialogService) {}

  ngOnInit(): void {}

  openDialog() {
    const dialog = this.dialogService.modal(DialogComponent);
    dialog.open();
  }
}
