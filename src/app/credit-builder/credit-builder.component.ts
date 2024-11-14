import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-credit-builder',
  templateUrl: './credit-builder.component.html',
  styleUrl: './credit-builder.component.css'
})
export class CreditBuilderComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }
}
