import { Component } from '@angular/core';

@Component({
  selector: 'app-popupmenu-navigation',
  templateUrl: './popupmenu-navigation.component.html',
  styleUrls: ['./popupmenu-navigation.component.css']
})
export class PopupmenuNavigationComponent {
  showItem = true;

  hideItem() {
    this.showItem = false;
    setTimeout(() => {
      this.showItem = true;
    }, 1000);
  }
}
