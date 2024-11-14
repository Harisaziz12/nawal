import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }
}
