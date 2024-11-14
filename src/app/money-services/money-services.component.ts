import { Component, HostListener } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-money-services',
  templateUrl: './money-services.component.html',
  styleUrls: ['./money-services.component.css']
})
export class MoneyServicesComponent {

  faCheck = faCheck;
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
      title: 'Credit Monitoring',
      description: 'We provide you with real time scores and easy-to-read credit reports. We track any changes in your scores or underlying reports to prevent identity theft and to deliver personalized insights and tips to help you improve your scores. This service helps: ',
      imageUrl: 'images/services1.png',
      desc: [
        "Prevent identity theft ",
        "Stay on top of your credit profile",
        "Design personalized plans for score improvement ",

      ]
    },
    {
      title: 'RENT REPORTING ',
      description: 'We will report each on-time rent payment that you make to all three credit bureaus. We also can report up to two years of your past rental payments. Reporting these payments can result in an immediate increase in your score and each on-time payment could increase it even higher. This service can: ',
      imageUrl: 'images/services2.png',
      desc: [
        "Add another trade line to your credit profile",
        "Increase scores quickly",
        'Built strong bill paying habit'
      ]
    },
    {
      title: 'Report Auditing ',
      description: ' We leverage millions of data points to help identify legitimate errors on your credit report and provide you with the infrastructure to get those items removed. These errors can consist of incorrect personal data or outdated or inaccurate information on personal debts and other things in between. This service can:  ',
      imageUrl: 'images/services3.png',
      desc: [
        "Identify errors on your credit report",
        "Show you the impact of a potential change to your report",
        "Track updates in real time"
      ]
    },
    {
      title: 'PATHWAY CARD',
      description: 'Our Pathway Card is designed as a powerful tool in your credit building journey. Simply use our card like you would your normal debit card and watch your score improve with your everyday purchases. Benefits of the card: ',
      imageUrl: 'images/services4.png',
      desc: [
        "No minimum security deposit",
        "No annual fees and no interest ",
        "Increase scores with everyday purchases",
        "Cash back rewards"
      ]
    },

    {
      title: 'RENT ADVANCES',
      description: 'We’ve learned that tackling the root causes of poor credit is just as important as helping people improve their credit. That’s why we designed our Rent Advance service. The first service of its kind that helps consumers better manage their cash flow by providing access to interest free cash advances. The service provides: ',
      imageUrl: 'images/services5.png',
      desc: [
        "Interest free advances up to $2,000",
        "Utilizes progressive underwriting models",
        "Credit limits that increase as the consumer’s financial health strengthens",
        "A bridge to other leading products"
      ]
    },
    {
      title: 'REFERRAL EARNINGS ',
      description: 'Our referral earnings program makes it easier for consumers to do the work required to strengthen their financial health and leverage their personal networks to offset the cost of our services. The service includes: ',
      imageUrl: 'images/services6.png',
      desc: [
        "Monthly payments of up to $15 per month for each new member",
        "No caps on the amount a member can earn",
        "No limit on how long they can be paid for a referral",
        "Timely payments made into the bank account of their choice"
      ]
    },

  ];

  startIndex = 0;
  selectedCard: any = null;
  innerWidth: any;

  // NEW CODE  ///////////////////////////////
  currentIndex = 0;
  itemsPerSlide = 3;
  dots = Array(Math.ceil(this.cards.length / this.itemsPerSlide)).fill(0);

  getTransform() {
    return `translateX(-${this.currentIndex * 106.5}%)`;
  }
  nextSlide() {
    // Advance to the next set of three cards
    if (this.currentIndex < Math.floor(this.cards.length / this.itemsPerSlide) - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the start
    }
    this.updateDotsPosition();
  }
  

  prevSlide() {
    // Move to the previous set of three cards
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.floor(this.cards.length / this.itemsPerSlide) - 1; // Go to the last full set
    }
    this.updateDotsPosition();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateDotsPosition();
  }

  updateDotsPosition() {
    // Dynamically update dot positions
    this.dots = Array(Math.ceil(this.cards.length / this.itemsPerSlide)).fill(0);
  }

  // NEW CODE //////////////////////////////////////////////////////////////////////////////

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.updateItemsPerSlide();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.updateItemsPerSlide();
  }


  updateItemsPerSlide() {
    if (this.innerWidth <= 450) {
      this.itemsPerSlide = 1; // Show 1 card per slide on very small screens
    } else if (this.innerWidth <= 768) {
      this.itemsPerSlide = 2; // Show 2 cards per slide on smaller screens (tablets)
    } else {
      this.itemsPerSlide = 3; // Show 3 cards per slide on larger screens
    }
    this.dots = Array(Math.ceil(this.cards.length / this.itemsPerSlide)).fill(0);  // Update the dots
  }
  

  openModal(content: any, card: any) {
    this.selectedCard = card;
    this.modalService.open(content, { centered: true });
  }
} 