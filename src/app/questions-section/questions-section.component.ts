import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.css']
})
export class QuestionsSectionComponent {
  ngOnInit(): void {
    // This ensures all accordions are closed when the component initializes
    this.resetAccordionState();
  }
  accordionItems = [
    { title: 'How does Nevly Money work?', content: "The way our service works is pretty simple, and we often use a familiar visual to explain it. Imagine a person who calls their local fire department to report that their home is on fire and need the fire department to send a fire truck to their home to put out the fire. The person on the other end of the phone asks the homeowner would they rather they send a fire truck with one hose or another fire truck that has multiple, super powerful hoses. The homeowner says send the truck with the multiple hoses. Nevly Money can best be described using this analogy. There are nearly 100mm Americans in the United States with a poor or bad credit score and the overwhelming majority of those consumers choose to do their best navigating around this problem. Each year a percentage of these Americans decide that they are ready to do something about this problem. Using our analogy, we view these people as being our homeowner. We decided to construct Nevly Money in a way that would deliver the greatest number of services to consumers with the goal being that when the consumer uses as many of these services as possible at the same time, their credit score stands a far greater chance of increasing faster than it would using any one of them in isolation. This is the magic of Nevly Money!", isOpen: true },
    { title: 'Will you add more services over time and how do you decide which ones to add?', content: 'We believe that we definitely will but not simply for the sake of adding more services. We are relentlessly obsessed with designing innovative solutions that not only help consumers improve their credit scores but also that help alleviate many of the root causes that consumers encounter that can increase the chances of a consumer harming their credit scores.', isOpen: true },
    {
      title: 'Who is the ideal Nevly Money user?',
      content: 'We believe our services can meet the needs of many different types of consumers. If you are just looking to become more aware of what’s going on with your credit, we have a subscription plan for you. If you are looking to begin your journey of improving your credit profile, we have options for you as well but we have found that there are some core attributes that many consumers share who get the most out of our services:',
      list: [
        "You’ve been a renter in the past or are currently renting and have largely paid your rent on time.",
        "You use a debit card for your day-to-day expenses.",
        "You believe that there may be one or more negative items on your credit report that could be eligible for removal.",
        "Having access to interest free cash advances could help you better manage your cash flow in between paychecks.",
        "You are willing to do a little bit of work with us to strengthen your",
        "credit score and your overall financial health."
      ],
      isOpen: true
    },
    { title: 'How much does Nevly Money cost?', content: 'We currently have three subscription plans – our Starter Plan, Lite Plan and our Core Plan. Our Starter Plan is a free subscription plan. Our Lite Plan cost $49.99 per month and our Core Plan cost $59.99 per month.', isOpen: true },
    { title: 'How do I view my account progress and score?', content: 'Your Nevly Money dashboard is the central place where we keep you up to date on everything going on with your progress. From your dashboard, you can tell us what your target score is, and we will keep you up to date on changes to your score as well as any updates on the different services being delivered to you. We will confirm for you when your landlord has confirmed your most recent rental payment. We’ll also notify you of any updates to your credit profile that are related to our report auditing service such as when an item has been removed or its reported status improved. You can also apply for our Rent Advance service and when approved, request advances directly from your dashboard.', isOpen: true },
    { title: 'Will my information be protected?', content: 'Of course! Your personal information will always remain secure. Check out our Privacy Policy for more details.', isOpen: true },
    { title: 'How do I cancel my service if I no longer need it?', content: 'Your Nevly Money service can be cancelled right from your dashboard.', isOpen: true },

  ];
  accordionItems1 = [
    { title: 'Will applying require a hard credit check to apply?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: true },
    { title: 'Do I need to have a Pathway Account to use the Pathway Card?', content: 'Yes. We designed our Pathway Card to work with a designated Pathway Account. This approach allows you to move money into your Pathway Account at a pace that is comfortable for you and to build credit at your own pace.', isOpen: true },
    { title: 'Does Nevly charge any fees for using the Pathway Card?', content: 'No way! No fees...period.', isOpen: true },
    { title: 'Can you explain how the Pathway Card can help improve my score?', content: 'Our Pathway Card offers features that help you stay on top of key factors that impact your credit score. Consistent use of our Pathway Card can help you build on-time payment history, increase the length of your credit history over time, and more. We report your card usage activity to the major credit bureaus – TransUnion, Experian and Equifax.', isOpen: true },
    { title: 'What makes your Pathway Card different from traditional credit cards?', content: 'Unlike traditional credit cards, our Pathway Cards helps you build credit with no annual fees, no interest and no credit check required to apply. Our Pathway Card is a secured credit card. The money you move into your Pathway Account becomes the amount you can spend on the card. Unlike other secured credit cards, that money can be used to pay off your monthly balances. Since our Pathway Card doesn’t have a pre-set limit, spending up to the amount you added won’t contribute to a high-utilization rate on your credit history.', isOpen: true },
    { title: 'Is your Pathway Card a secured credit card?', content: 'Yes, our Pathway Card is a secured credit card. The money you move into your Pathway Account becomes the amount you have to spend with your Pathway Card. This amount is often referred to by other secured credit cards as the security deposit. Like other secured credit cards, our Pathway Card also reports your transactions to the major credit bureaus, to help you build up your credit history over time. However, for most secured credit cards, security deposits are unavailable to you, the consumer, until you close the account. With our Pathway Card, you can use your deposit to pay for monthly charges. Plus, we charge no annual fees or interest for use of our Pathway Card, and no minimum-security deposit is required!', isOpen: true },
    { title: 'What is the credit limit for the Pathway Card?', content: 'Our Pathway Card doesn’t have a pre-set credit limit. Instead, the money you move into your Pathway Account sets your credit limit on the card. With traditional credit cards, using a high percentage of your available credit limit could negatively impact your credit score. You don’t have to worry about that with our Pathway Card because we don’t report credit utilization. On-time payment history can have a positive impact on your credit score. Late payment may negatively impact your credit score. How much you can spend with our Pathway Card is shown to you as “Credit Limit” on your personalized dashboard. ', isOpen: true },
    { title: 'If I use all of the funds I add to my Pathway Account, will Nevly report high utilization to the three credit bureaus and hurt my credit score?', content: 'Nope. Our Pathway Card doesn’t report percent utilization rate because it has no pre-set credit limit. That means spending up to the amount you add to your Pathway Account will not result in the reporting of a high-utilization rate.', isOpen: true },

  ];
  accordionItems2 = [
    { title: 'Can you explain to me what your Rent Advance service is?', content: 'Our Rent Advance service is a service that we designed to help our members who can use some extra help in between paychecks to help them get by. We advance them money at the beginning of the month around the time they pay their rent and have them pay us back in the middle of the month when they get their second paycheck.', isOpen: true },
    { title: 'How do I qualify to participate in the Rent Advance service?', content: 'You first have to be a subscriber on one of our paid subscription plans. You can apply for the service right from your dashboard and receive an immediate decision.', isOpen: true },
    { title: 'How much is an advance?', content: 'The amount of an advance will vary based on the amount of your monthly rental payment but in most instances, you will begin with an advance rate of the greater of ten percent (10%) of your monthly rent payment and $150.', isOpen: true },
    { title: 'Can the amount of a Rent Advance be increased?', content: 'It sure can! We’ve designed the service to reward members who are progressing on their journey of strengthening their financial health and who demonstrate positive repayment behavior. We periodically will review a member’s account and if warranted will recommend an increase in their advance rate. The member will have the option to either accept the increase in advance rate or decline it. A member’s advance rate can increase to as high as the greater of fifty percent (50%) of their rent payment and $2,000.', isOpen: true },
    { title: 'Can a Rent Advance ever be paid back over time?', content: 'Yes, it can. For members who are active users of the service, are progressing in their journey of strengthening their financial health and who have demonstrated positive repayment behavior, they can elect to repay a Rent Advance over a period of time that they select rather than having one hundred percent (100%) of the advance paid back from their next paycheck.', isOpen: true },
    { title: 'Do you charge interest on these Rent Advances?', content: 'We don’t charge any interest for a member who is approved taking out a Rent Advance. The cost of an advance is included in the member’s monthly subscription price.', isOpen: true },

  ];
  accordionItems3 = [
    { title: 'I sublease a room/apartment. Can I report my monthly rent?', content: 'Yes, you can! As long as you have a written agreement with the primary landlord / management company or owner of the home. We are unable to report any rent payments if you only have an agreement with the original renter that signed the rental agreement with the landlord or management company. If you’re not on the main lease – you should request to be added.', isOpen: true },
    { title: 'Can you report my past addresses?', content: 'We are able to report the last 24 months of your past rental history (from today back two (2) years) and up to one additional address other than your current address. This helps to add age to your credit profile, which in turn potentially provides a greater increase in your credit score. Of the five (5) factors in determining your credit score, length of credit history contributes 15% to the mix. Upon enrolling, we will reach out to your landlord and confirm all information. Upon confirmation, you will receive credit for the last two (2) years of your rent payments!', isOpen: true },
    { title: 'I now live at a new address but have a previous address. Can I report both of these addresses?', content: 'Yes, you can! We can report up to the last 24 months of your past address and do ongoing monthly reporting for your current address.', isOpen: true },
    { title: 'Can I use your service if another company has already reported my address?', content: 'No unfortunately you cannot. The bureaus only allow an address to be reported once on your credit report. If you have another company already reporting the address you want to enroll with us, we will not be able to report it for you.', isOpen: true },
  ]; 
  accordionItems4 = [
    { title: 'What is report auditing?', content: 'Report auditing is the process of addressing any questionable negative items that could be hurting your credit profile. If the bureaus and your creditors can’t verify these items are fair and accurate, they are required to remove them.', isOpen: true },
    { title: 'Can bad credit be corrected or deleted?', content: 'The law entitles a consumer to an accurate, fair and substantiated credit profile. If something is on your credit profile that you believe isn’t accurate, the law allows you the right to correct it with the credit bureaus and your creditors.', isOpen: true },
    { title: 'Can I do this work on my own?', content: 'Yes, you most definitely can. You simply need to contact the bureaus and your creditors to address any errors on your credit. That being said, this process can be time consuming and confusing and so millions of people just like you choose to get help. ', isOpen: true },
    { title: 'What items can be removed from my credit report?', content: 'Anything inaccurate, unfair or unverified can be challenged with the bureaus and your creditors. This includes collections, late payments, charge-offs, liens, bankruptcies, repossessions, etc.', isOpen: true },
    { title: 'What is a negative item?', content: 'Anything in your credit history that could lower your score is a negative item. Collections accounts, late payments, charge-offs, liens, bankruptcies, repossessions and more all constitute negative items. In certain instances, if these negative items came as a result of identity theft, divorce, medical debt, student debt or military leave, you may be able to remove them from your credit report.', isOpen: true },
    { title: 'Can deleted items come back on my credit report?', content: 'Yes, your creditors may report a negative item again, even after it’s been removed or deleted. That’s why it’s important to contact both the credit bureaus and your creditors. This will increase the likelihood that inaccurate or unfair negative items will not reappear on your credit report.', isOpen: true },
    { title: 'How does the dispute process work?', content: 'Once you’ve identified which items on your credit report you’d like to dispute, we send letters within 5-10 business days to challenge those items. Credit bureaus have forty-five (45) days to investigate those challenges. They must respond within sixty (60) days of the initial start date.', isOpen: true },
    { title: 'How many disputes can be filed on my behalf per month?', content: 'Our report auditing services are only available with our two paid subscriptions. Core subscribers are permitted to request that we dispute or seek verification on up to four (4) items per month while Lite subscribers are permitted to request that we dispute or seek verification on up to two (2) items per month.', isOpen: true },


  ]; 
  accordionItems5 = [
    { title: 'How does the Referral Program work?', content: 'Each member who has a paid subscription has the option to participate in our Referral Program. If a member chooses to participate, they can sign up directly from their dashboard and upon completion of signing up they can secure a personalized QR code. Any member who signs up for a paid subscription plan utilizing your personalized QR code will entitle you to a monthly payment every month for as long as they remain on a paid subscription plan. We will pay you your total monthly payment each month and you check the status of your payments directly from your personalized dashboard.', isOpen: true },
    { title: 'How much do I get paid each month for a subscriber under the Referral Program?', content: 'For a new member who subscribes for a Lite Plan you will result in you being paid $10 per month and for a new member who subscribes for a Core Plan will result in you being paid $15 per month. ', isOpen: true },
    { title: 'Is there a limit on the number of referrals I can be paid for?', content: 'No there is absolutely no limit on the number of new community members we will pay you for introducing to our product. ', isOpen: true },
    { title: 'How do I get paid for referrals?', content: 'We pay out for referrals monthly at the beginning of the month following when the new member subscribed. We deposit the cash into the account you designate on your personalized dashboard.  ', isOpen: true },

  ];

  // toggleAccordion(index: number): void {
  //   this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  //   this.accordionItems5[index].isOpen = !this.accordionItems5[index].isOpen;
  // }


    // Toggle accordion state
    toggleAccordion(index: number, accordion: any[]): void {
      // Toggle the isOpen state of the clicked item
      accordion[index].isOpen = !accordion[index].isOpen;
    }
  
    // Reset all accordion states to closed
    resetAccordionState() {
      this.accordionItems.forEach(item => item.isOpen = false);
      this.accordionItems1.forEach(item => item.isOpen = false);
      this.accordionItems2.forEach(item => item.isOpen = false);
      this.accordionItems3.forEach(item => item.isOpen = false);
      this.accordionItems4.forEach(item => item.isOpen = false);
      this.accordionItems5.forEach(item => item.isOpen = false);
    }
}
