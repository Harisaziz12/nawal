import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-credit-report',
  templateUrl: './credit-report.component.html',
  styleUrl: './credit-report.component.css'
})
export class CreditReportComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }

}
