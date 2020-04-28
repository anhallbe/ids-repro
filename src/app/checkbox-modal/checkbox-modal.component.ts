import { Component, OnInit } from '@angular/core';
import { SohoModalDialogService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-checkbox-modal',
  templateUrl: './checkbox-modal.component.html',
  styleUrls: ['./checkbox-modal.component.css']
})
export class CheckboxModalComponent implements OnInit {

  constructor(private modalService: SohoModalDialogService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const modal = this.modalService.modal(InnerModalComponent, null);
    modal.title('Modal with a checkbox')
      .buttons([
        {
          text: 'Close',
          click: () => modal.close(),
        },
      ]);
    modal.open();
  }
}

@Component({
  template: `
    <div class="field">
      <div class="switch">
        <input soho-checkbox type="checkbox" [switch]="true" id="pizza" name="switch2">
        <label soho-label for="pizza" [forCheckBox]="true">Scroll right there ---></label>
      </div>
    </div>
  `,
})
export class InnerModalComponent { }
