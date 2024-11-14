import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }
  isNavbarCollapsed = true; // Initially collapsed
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
