import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-nevly-money',
  templateUrl: './nevly-money.component.html',
  styleUrls: ['./nevly-money.component.css']
})
export class NevlyMoneyComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }
  cards = [
    {
      number:'1',
      title: 'SIGN UP',
      description: 'Get started by selecting the subscription plan that is right for you and your journey and create your Nevly Money account.',
    },
    {
      number:'2',
      title: 'IMPROVE YOUR CREDIT',
      description: "If you are simply looking to keep track of what's going on with your credit our Starter Plan is perfect for you. If you are ready to begin (re)building your credit, leverage our service offerings to begin doing that work.",
    },
    {
      number:'3',
      title: 'MANAGE CASH FLOW',
      description: 'Leverage our Rent Advance service to provide you access to interest free cash advances that help you out between paychecks or when unexpected things come up.',
    },
    {
      number:'4',
      title: 'BUILD STRONG HABITS',
      description: "Leverage Nevly Money's personalized service offerings to ensure the work you do to improve your credit profile and better manage your cash doesn't get undone by bad habits",
    }
  ];
}
