import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  idsVersion: string;
  idsNgVersion: string;

  ngOnInit() {
    const htmlElement = document.querySelector('html');
    this.idsVersion = htmlElement.getAttribute('data-sohoxi-version');
    this.idsNgVersion = htmlElement.getAttribute('data-ids-enterprise-ng-version');
    console.log(this.idsVersion, this.idsNgVersion)
  }
}
