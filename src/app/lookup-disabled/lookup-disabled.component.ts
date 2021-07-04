import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup-disabled',
  templateUrl: './lookup-disabled.component.html',
  styleUrls: ['./lookup-disabled.component.css']
})
export class LookupDisabledComponent implements OnInit {

  model: string;
  disabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
