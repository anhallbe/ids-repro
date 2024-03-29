import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {
  columns: SohoDataGridColumn[] = [
    {
      name: "Name",
      field: "name",
    },
    {
      name: "Description",
      field: "description",
    },
  ];

  data = [
    {
      name: "Name 1",
      description: "This column is too darn wide!",
    },
    {
      name: "Name 2",
      description: "Description 2",
    },
    {
      name: "Name 3",
      description: "Description 3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
