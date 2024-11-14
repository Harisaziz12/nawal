import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-palns-subscription',
  templateUrl: './palns-subscription.component.html',
  styleUrls: ['./palns-subscription.component.css']
})
export class PalnsSubscriptionComponent implements OnInit {
  faCheck = faCheck;
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  openPopup() {
    this.popupContainer.clear(); // Clear any existing popup instances
    const popupRef = this.popupContainer.createComponent(PopupComponent);
    popupRef.instance.closePopup.subscribe(() => {
      popupRef.destroy(); // Destroy the popup when closing
    });
  }
  plans = [
    {
      name: 'Newly Starter',
      price: 'FREE',
      tagline: 'Perfect for you if you are starting out your credit journey',
      features: [
        'Equifax credit score updated monthly',
        'Equifax credit report updated monthly',
        'Real-time credit monitoring alerts',
        'Ability to upgrade subscription from your dashboard'
      ]
    },
    {
      name: 'Newly Lite',
      price: '$49.99',
      time: '/PER MONTH',
      tagline: 'Ready to improve your credit score and get help managing your cash flow issues with an interest-free option, this is the plan for you',
      features: [
        'Three bureau credit reports and scores updated monthly',
        'Report audit services',
        'Real-time monitoring alerts',
        'Rent payment reporting',
        'Credit builder card access',
        'Referral program',
        'Rent Advance service with credit limits up to $1,500'
      ]
    },
    {
      name: 'Newly Core',
      price: '$59.99',
      time: '/PER MONTH',
      tagline: 'Need a bit more fire power than our Lite Plan, here you go. Everything in our Lite Plan plus:',
      features: [
        'Two years of past rent reporting',
        'Rent Advance service with credit limits up to $2,900'
      ]
    }
  ];

  ngOnInit() {
    console.log(this.plans); 
  }

  // Function to prepend checkmark icon to features
  getFeatureWithIcon(feature: string): string {
    return `<i class="fa-solid fa-check" style="color: white;"></i> ${feature}`;
  }
}
