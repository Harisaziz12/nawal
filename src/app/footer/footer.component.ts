import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FooterModalComponent } from '../footer-modal/footer-modal.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
declare var window: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private modalService: NgbModal) {}
  faInstagram = faInstagram; 
  faTimes = faTimes;
  faTiktok = faTiktok;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  showPopup = false;
  popupTitle = '';
  popupContent = '';
  @Output() serviceSelected = new EventEmitter<string>();
  buttons = [
    {
      label: 'Credit Monitoring',
      content: {
        title: 'Credit Monitoring',
        description: 'We provide you with real time scores and easy-to-read credit reports. We track any changes in your scores or underlying reports to prevent identity theft and to deliver personalized insights and tips to help you improve your scores. This service helps: ',
        images: ['images/services1.png'],  // Updated to images array
        list: [
          "Prevent identity theft",
          "Stay on top of your credit profile",
          "Design personalized plans for score improvement"
        ]
      }
    },
    {
      label: 'Rent Reporting',
      content: {
        title: 'RENT REPORTING',
        description: 'We will report each on-time rent payment that you make to all three credit bureaus. We also can report up to two years of your past rental payments. Reporting these payments can result in an immediate increase in your score and each on-time payment could increase it even higher. This service can: ',
        images: ['images/services2.png'],  // Updated to images array
        list: [
          "Add another trade line to your credit profile",
          "Increase scores quickly",
          "Build strong bill-paying habits"
        ]
      }
    },
    {
      label: 'Report Auditing',
      content: {
        title: 'Report Auditing',
        description: 'We leverage millions of data points to help identify legitimate errors on your credit report and provide you with the infrastructure to get those items removed. These errors can consist of incorrect personal data or outdated or inaccurate information on personal debts and other things in between. This service can: ',
        images: ['images/services3.png'],  // Updated to images array
        list: [
          "Identify errors on your credit report",
          "Show you the impact of a potential change to your report",
          "Track updates in real-time"
        ]
      }
    },
    {
      label: 'Pathway Card',
      content: {
        title: 'PATHWAY CARD',
        description: 'Our Pathway Card is designed as a powerful tool in your credit-building journey. Simply use our card like you would your normal debit card and watch your score improve with your everyday purchases. Benefits of the card: ',
        images: ['images/services4.png'],  // Updated to images array
        list: [
          "No minimum security deposit",
          "No annual fees and no interest",
          "Increase scores with everyday purchases",
          "Cash back rewards"
        ]
      }
    },
    {
      label: 'Rent Advances',
      content: {
        title: 'RENT ADVANCES',
        description: 'We’ve learned that tackling the root causes of poor credit is just as important as helping people improve their credit. That’s why we designed our Rent Advance service. The first service of its kind that helps consumers better manage their cash flow by providing access to interest-free cash advances. The service provides: ',
        images: ['images/services5.png'],  // Updated to images array
        list: [
          "Interest-free advances up to $2,000",
          "Utilizes progressive underwriting models",
          "Credit limits that increase as the consumer’s financial health strengthens",
          "A bridge to other leading products"
        ]
      }
    },
    {
      label: 'Referral Earnings',
      content: {
        title: 'REFERRAL EARNINGS',
        description: 'Our referral earnings program makes it easier for consumers to do the work required to strengthen their financial health and leverage their personal networks to offset the cost of our services. The service includes: ',
        images: ['images/services6.png'],  // Updated to images array
        list: [
          "Monthly payments of up to $15 per month for each new member",
          "No caps on the amount a member can earn",
          "No limit on how long they can be paid for a referral",
          "Timely payments made into the bank account of their choice"
        ]
      }
    }
  ];
  
  
  openModal(content: any) {
    const modalRef = this.modalService.open(FooterModalComponent);
    modalRef.componentInstance.modalContent = content; 
  }
  footerItems = [
    { title: 'NEVLY' },
    { name: 'HOW NEVLY MONEY WORKS', link: '/faqs' },
    { name: 'CONTACT', link: '/contact' },
  ];


  footerItem2 = [
    { title: 'TRANSPARENCY' },
    { name: 'Terms and Conditions', link: '/termsandconditions' },
    { name: 'Privacy Policy', link: '/privacypolicy' },
    { name: 'Security Policy', link: '/securitypolicy' },
  ];

  footerItem3 = [
    { title: 'DOWNLOAD THE APP' }
  ];

  openPopup(itemName: string) {
    this.popupTitle = itemName;

    switch (itemName) {
      case 'Privacy Policy':
        this.popupContent = `
          <div>
              <p class="text-clas poppins-bold ">About Us </p>
    <p class="text-clas poppins-regular ">We are Nevly, a financial technology company. The Privacy Policy covers Nevly’s services in the United States.</p>
    <p class="text-clas poppins-regular "> WE (AND OTHERS ACTING ON OUR BEHALF) ARE COMMITTED TO PROTECTING AND RESPECTING YOUR PRIVACY.</p>
    <p class="text-clas poppins-regular "> 
We will:
     </p>
    <ul class="text-clas poppins-regular ">  
    <p class="text-clas poppins-regular ">  . </p>
    <li>always keep your information safe and private;</li>
    <li>never sell your information; and</li>
    <li>allow you to manage and review your marketing choices at any time.</li>    
    </ul>
       <p class="text-clas poppins-bold ">Why do I need to read this notice?</p>
    <p class="text-clas poppins-regular ">We will collect your personal information when you use:</p>
 <ul class="text-clas poppins-regular ">  
    <li>our website at www.nevly.com;</li>
    <li>the Nevly app; or</li>
    <li>any of the services you can get access to through the Nevly app or website (our services).</li>  
    </ul>

 <p class="text-clas poppins-bold ">THIS POLICY CONTAINS IMPORTANT INFORMATION</p>
    <p class="text-clas poppins-regular ">This document explains what information we collect, how we use it, and your rights if you want to change how we use your personal information.</p>
    <p class="text-clas poppins-regular ">If you have concerns about how we use your personal information, you can contact us at privacy@nevly.com.</p>
    <p class="text-clas poppins-regular ">This Policy is originally written in and governed by the English language. If this text is translated into another language and there is a conflict between the English and non-English versions, the English text will prevail.</p>
<p class="text-clas poppins-bold ">YOUR PERSONAL INFORMATION</p>
<p class="text-clas poppins-bold ">What information do you collect about me?</p>

    <p class="text-clas poppins-regular ">The list below explains what personal information we collect and use.</p>
    <p class="text-clas poppins-regular ">Information you give us</p>

<p class="text-clas poppins-bold ">We collect information you provide when you:</p>
<ul class="text-clas poppins-regular ">  
    <li>fill in any forms;</li>
    <li>correspond with us;</li>
    <li>register to use the Nevly app;</li>
    <li>open an account or use any of our services;</li>
    <li>take part in online discussions, surveys or promotions;</li>    
     <li>speak with a member of our customer support team (either on the phone or through the Nevly app);</li>
    <li>enter a promotion; or</li>   
     <li>contact us for other reasons.</li>
    </ul>
 <p class="text-clas poppins-bold ">We will collect the following information:</p>
 <ul class="text-clas poppins-regular ">  
    <li>your name, address, and date of birth;</li>
    <li>your email address, phone number and details of the device you use (for example, your phone, computer or tablet);</li>
    <li>your username, password and other registration information;</li>
    <li>details of your bank account, including the account number, sort code and ABA routing number or SWIFT code;</li>
    <li>details of your debit cards and credit cards, including the card number, expiration date and CVC (the last three digits of the number on the back of the card);</li>
    <li>identification documents (for example, your passport or driving license number), copies of any documents you have provided for identification purposes, a photograph of you, and any other information you provide to prove you are eligible to use our services;</li>
    <li>records of our discussions, if you contact us or we contact you; and</li>
    <li>your photo (if you upload one).</li>
    <li>information from your device whenever you use our website or the Nevly app, we collect the following information:</li>
<li>
    <ol type="i" class="text-clas poppins-regular ">  
    <li>technical information, including the internet protocol (IP) address used to connect your computer to the internet, your log-in information, the browser type and version, the time-zone setting, the operating system and platform, the type of device you use, a unique device identifier (for example, your device's IMEI number, the MAC address of the device's wireless network interface, or the mobile phone number used by the device), mobile network information, your mobile operating system, the type of mobile browser you use and so on;</li>
    <li>information about your visit, including the links you have clicked on, through and from our site (including date and time), services you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling and clicks), and methods used to browse away from the page;</li>
    <li>information on transactions (for example, payments into and out of your account), including the date, time, amount, currencies, exchange rate, beneficiary details, details of the merchant or ATMs associated with the transaction, IP address of sender and receiver, sender's and receiver's name and registration information, messages sent or received with the payment, details of device used to arrange the payment and the payment method used; and</li>
    <li>information stored on your device, including if you give us access to contact information from your address book, log-in information, photos, videos or other digital content, check-ins (sometimes, we call this content information). The Nevly app will regularly collect this information in order to stay up to date.</li>
    </ol>
    </li>    
    </ul>
 <p class="text-clas poppins-bold ">Information About Your Location</p>
 <ul class="text-clas poppins-regular ">  
    <li>If you have location services in the Nevly app switched on, we track your location using GPS technology and your IP address.</li>
    <li>We collect information from third parties, such as credit reference agencies, fraud-prevention agencies and partners who help us to provide our services.</li>
    <li>This includes your credit record, information to help us check your identity, and information relating to your transactions.</li>  
    </ul>
<p class="text-clas poppins-bold ">Information from social media</p>
<ul class="text-clas poppins-regular ">  
    <li>If you allow us to, we will collect information such as friends lists from Facebook or similar information from other online accounts. If you've asked us to, we'll use your Facebook profile to confirm your identity as part of our Know Your Customer (KYC) process, (which is the process of how we verify you as a customer).</li> 
    </ul>
 <p class="text-clas poppins-bold ">How do you use my information?</p>
 <p class="text-clas poppins-bold ">Keeping to our contracts and agreements with you</p>
<ul class="text-clas poppins-regular ">  
    <li>We need certain personal information to provide our services and cannot provide them without this information.</li>
    </ul>
<p class="text-clas poppins-bold ">Legal obligations</p>
<ul class="text-clas poppins-regular ">  
    <li>In some cases, we have a legal responsibility to collect and store your personal information (for example, under money-laundering laws we must hold certain information about our customers).</li>
     
    </ul>
    <p class="text-clas poppins-bold ">Providing our services</p>
<ul class="text-clas poppins-regular ">  
    <li>Whenever you apply for a product or service, we will use your personal information to check your identity (as part of our KYC process) and decide whether or not to approve your application.</li>
    <li>
    If you are already a Nevly customer, we use your personal information to meet our obligations relating to any transactions you make (for example, making payments into and out of your Nevly account, withdrawing cash or making payments with your Nevly Card). If you ask us to exchange the currency of the money you hold in your Nevly account, we'll use your personal information to help us do that.</li>
    <li>We also use your personal information to give you details of our products and services.</li>
    <li>We also use your personal information to contact you by phone and provide you with customer support services. We may record these calls, but only for internal training and quality-control purposes</li>
    </ul>
 <p class="text-clas poppins-bold ">The types of information we use are:</p>
<ul class="text-clas poppins-regular ">  
    <li>information you have given us; an</li>
    <li>information from third parties (as explained in the "What information do you collect about me?" section above).</li>
    
    </ul>
 <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR PERSONAL INFORMATION TO PROVIDE OUR SERVICES</p>
<ul class="text-clas poppins-regular ">  
    <li>If you apply for a credit product, we (or our lending partner) will carry out a credit check to better understand your financial circumstances and repayment history.</li>    
    </ul>
<p class="text-clas poppins-bold "></p>Our legal basis for collecting your information includes:
<ul class="text-clas poppins-regular ">  
    <li>keeping to contracts and agreements between you and us;</li>
    <li>legitimate interests (we will be efficient about how we meet our obligations, and we want to provide you with a good service); and/or</li>
    <li>legal obligations.</li>
    </ul>
 <p class="text-clas poppins-bold ">Protecting against fraud</p>
<ul class="text-clas poppins-regular ">  
    <li>We use your personal information to check your identity to protect against fraud, comply with financial crime laws and to confirm that you are eligible to use our services. We also use it to help us better understand your financial circumstances and manage fraud risks related to your Nevly account.</li>  
    </ul>
<p class="text-clas poppins-bold ">The types of information we use are:</p>
    <p class="text-clas poppins-regular "></p>
<ul class="text-clas poppins-regular ">  
    <li>information you have provided;</li>
    <li>information from your device;</li>
    <li>location information; and/or</li>
    <li>information from third parties.</li>
    </ul>
    <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR PERSONAL INFORMATION TO PROTECT AGAINST FRAUD</p>
<ul class="text-clas poppins-regular ">  
    <li>If you have switched on location services in the Nevly app and your mobile phone tells us that you're in the US, but your Nevly Card is being used in Spain, we may determine not process that transaction.</li>
    </ul>
 <p class="text-clas poppins-bold ">Marketing and providing new products and services that might interest you</p>
    <p class="text-clas poppins-bold ">We use your personal information to do the following:</p>
<ul class="text-clas poppins-regular ">  
    <li>provide you with information about other goods and services we offer that are similar to those you have already used or asked about;</li>
    <li>provide you with information about our goods or services, and our partner's promotions or offers, which we think you might be interested in. To help us do so, we may use information we hold about you in order to better understand your interests. You can opt out of this by using the in-app help service or by emailing privacy@nevly.com;</li>
    <li>if you agree, allow our partners and other organizations to provide you with information about their goods or services;</li>
    <li>measure or understand the effectiveness of our advertising, and provide relevant advertising to you; or</li>
    <li>process applications for products and services available through us and make decisions about whether to approve applications.</li>    
    <li>Remember, you can ask us to stop sending you marketing information by adjusting your marketing choices within the app.</li>    
    <li>The types of information we use are:</li>    
    <li>information you have provided;</li>    
    <li>information from your device;</li>    
    <li>location information; and/or</li>    
    <li>information from third parties.</li>    
    </ul>
    
 <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR PERSONAL INFORMATION FOR MARKETING</p>
<ul class="text-clas poppins-regular ">  
    <li>If you are a Nevly customer, we may contact you about optional extras or promotional offers. We may use information we gather about you through your use of our services to tailor these offers to you.</li>   
    </ul>
 <p class="text-clas poppins-bold ">To keep our services up and running</p>
<ul class="text-clas poppins-regular ">  
    <li>We use your personal information to manage our website and the Nevly app, (including troubleshooting, data analysis, testing, research, statistical and survey purposes), and to make sure that content from our website is presented in the most effective way for you and your device. For more information, please see our Cookies Policy</li>
    <li>We also use your personal information to allow you to take part in interactive features of our services, to tell you about changes to our services, and to help keep our website and the Nevly app safe and secure.</li>
    </ul>
    <p class="text-clas poppins-bold ">The types of information we use are:</p>
<ul class="text-clas poppins-regular ">  
    <li>information you have provided; and/or</li>
    <li>information from your device.</li>
    </ul>
<p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR PERSONAL INFORMATION TO RUN OUR SERVICES</p>
<ul class="text-clas poppins-regular ">  
    <li>If any changes we make to our services affect you, we'll normally contact you using the email address you gave us when you signed up, or through the Nevly app, to tell you about the changes.</li> 
    </ul>

 <p class="text-clas poppins-bold ">Helping with customer service</p>
<ul class="text-clas poppins-regular ">  
    <li>We use your personal information to provide customer service, help you complete transactions, and to add extra functions in order to provide a better experience.</li>
   
    </ul>
<p class="text-clas poppins-bold ">The types of information we use are:</p>
<ul class="text-clas poppins-regular ">  
    <li>information you have provided;</li>
    <li>information from your device; and/or</li>
    <li>location information.</li>  
    </ul>

    <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR PERSONAL INFORMATION FOR SOCIAL INTERACTIONS</p>
<ul class="text-clas poppins-regular ">  
    <li>We'll let you know if any of your contacts who are Nevly customers have used our products, upgrades or features or are in the same area as you (if they have consented to connecting to contacts within Nevly and location services switched on).</li>
    <li>If you have the relevant settings in the Nevly app switched on, we'll use the contact list on your phone, or your photo gallery, so you can easily make payments to your contacts and send photos with the Nevly app.</li>   
    </ul>

    <p class="text-clas poppins-bold ">Advertising based on location</p>
<ul class="text-clas poppins-regular ">  
    <li>We use your information to provide relevant advertising to you (for example, information on nearby merchants).</li>
   
    </ul>
    <p class="text-clas poppins-bold ">The types of information we use are:</p>
<ul class="text-clas poppins-regular ">  
    <li>information you have provided; and</li>
    <li>location information.</li>  
    </ul>
 <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF HOW WE USE YOUR LOCATION INFORMATION</p>
<ul class="text-clas poppins-regular ">  
    <li>If you go abroad, the Nevly app may automatically tell you the exchange rate in that country.</li>
    </ul>
     <p class="text-clas poppins-bold ">The legal basis for collecting your information includes:</p>
<ul class="text-clas poppins-regular ">  
    <li>keeping to contracts and agreements between you and us;</li>
    <li>legitimate interests (to develop and market our obligations and keep to regulations that apply to us); and/or</li>
    <li>consent (to track you when you have location services switched on).</li> 
    </ul>

     <p class="text-clas poppins-bold ">Meeting our legal obligations, enforcing our rights and other legal uses</p>
 <p class="text-clas poppins-bold ">We may need to share information about you:</p>

<ul class="text-clas poppins-regular ">  
    <li>with other entities (for example, fraud prevention vendors);</li>
    <li>if it is necessary to meet our legal obligations or in connection with legal claims; and/or</li>
    <li>to help detect or prevent crime.</li> 
    </ul>
    <p class="text-clas poppins-regular ">You can find out more in the "Do you share my information with anyone else?" section below.</p>

 <p class="text-clas poppins-bold ">The types of information we use are:</p>
<ul class="text-clas poppins-regular ">  
    <li>information you have provided;</li>
    <li>information from your device;</li>
    <li>location information;</li>
    <li>information from third parties; and/or</li>
    <li>social media information.</li>    
    </ul>
    <p class="text-clas poppins-bold ">
Do you carry out credit checks or make any automated decisions about me?</p>
    <p class="text-clas poppins-bold ">WE WILL CARRY OUT A CREDIT CHECK IF YOU APPLY FOR A CREDIT PRODUCT</p>
    <p class="text-clas poppins-regular ">
    We (and our lending partners) use credit reporting agencies to carry out credit checks on you. This means that when you apply for credit products, or we suggest credit products to you through the Nevly app, we can better understand your financial circumstances and repayment history and can tailor our credit products to your needs.</p>
    <p class="text-clas poppins-bold ">WITH YOUR CONSENT, WE MAY CARRY OUT A CREDIT CHECK TO OFFER YOU CREDIT PRODUCTS AND SERVICES YOU MAY QUALIFY FOR.</p>
    <p class="text-clas poppins-regular ">Some of the searches leave a 'soft footprint' on your credit history. This means that the search will be registered on your credit file but will not be visible to others if they search your credit history. (Basically, you will be able to see this footprint but other people won't - see here for more information.) A soft footprint will not affect your credit rating.</p>
    <p class="text-clas poppins-regular ">Some of our third-party providers, such as fraud prevention vendors, may also use credit reference agencies to help us check your identity and prevent fraud. These searches also only leave a trace on your credit history.</p>
    <p class="text-clas poppins-regular ">You can withdraw your consent for credit checks by contacting us through the Nevly app.</p>

    <p class="text-clas poppins-bold ">How do you use my information for marketing?</p>
    <p class="text-clas poppins-regular ">If you sign up to our services, we will assume you want us to contact you by post, email and phone (including text message) with offers and promotions. We may use the information we have collected about you in order to tailor our offers to you.</p>
    <p class="text-clas poppins-regular ">You can adjust your preferences or tell us you don't want to hear from us, at any time. Just use the 'Privacy' section within the 'Profile' section of the Nevly app or click on the unsubscribe links on any marketing message we send you.</p>
    <p class="text-clas poppins-regular ">We won't pass your details on to any organizations outside the Nevly group of companies for their marketing purposes without your consent. You can find out more in the "Do you share my information with anyone else?" section.</p>

    <p class="text-clas poppins-bold ">YOUR RIGHTS</p>
 <p class="text-clas poppins-bold ">What are my rights?You have the right to be informed about how we use your personal information.</p>
<ul class="text-clas poppins-regular ">  
    <li>We provide this privacy notice to explain how we use your personal information.</li>    
    </ul>
    <p class="text-clas poppins-bold ">We provide this privacy notice to explain how we use your personal information.</p>
<ul class="text-clas poppins-regular ">  
    
    <li>You can also ask for information about what information we process about you and why. If you make a DSAR, we will provide a copy of the personal information we hold about you.</li>    
    <li>This right is subject to exceptions. For example, we can only provide you with information as required and permitted under the Law and we cannot provide you with personal information about other people.</li>
    </ul>
 <p class="text-clas poppins-bold ">You can ask us to correct your personal information if you think it's wrong.</p>
    <ul>
    <li>You can have incomplete or inaccurate information corrected. Before we update your file, we may need to check the accuracy of the new information you have provided.</li>
    </ul>
     <p class="text-clas poppins-bold ">You can ask us to delete your personal information.</p>
    <p class="text-clas poppins-regular ">You can ask us to delete your personal information if:</p>
    <ul>
    <li>There's no good reason for us to continue using it;</li>
    <li>You gave us consent to use the information and you have now withdrawn that consent;</li>
    <li>You have objected to us using the information;</li>
    <li>We have used the information unlawfully; or</li>
    <li>The law requires us to delete the information.</li>

    </ul>
    <p class="text-clas poppins-regular ">
    Just to let you know, we may not be able to delete some of your information. We will keep certain customer information for at least six years (we've explained this in more detail below). If you've closed your Nevly account, we may not be able to delete your entire file because these regulatory responsibilities take priority. We will always let you know if we can't delete your information.
    </p>
    <p class="text-clas poppins-bold ">You can object to us processing your personal information for marketing purposes.</p>
    <ul>
    <li>You can tell us to stop using your personal information for marketing.</li>
    </ul>
     <p class="text-clas poppins-bold ">You can object to us processing other information (if we are using it for legitimate interests).</p>
    <ul>
    <li>If our legal basis for using your personal information is 'legitimate interests' and you disagree with us using it, you can object.</li>
    <li>However, if there is an overriding reason why we need to use the information (for example, legal reasons), we will not accept your request</li>
    <li>If you object to us using information which we need in order to provide our services, we may need to close your account as we won’t be able to provide the services.</li>
    </ul>
    
    <p class="text-clas poppins-bold ">You can ask us to restrict how we use your personal information.</p>
    <p class="text-clas poppins-regular ">You can ask us to suspend using your personal information if:</p>
    <ul>
    <li>You want us to investigate whether it is accurate;</li>
    <li>Our use of the information is unlawful but you do not want us to delete it;</li>
    <li>We no longer need the information, but you want us to continue holding it for you in connection with a legal claim; or</li>
    <li>You have objected to us using your information (see above), but we need to check whether we have an overriding reason to use it.</li>

    </ul>
<p class="text-clas poppins-bold ">You can ask us to transfer personal information to you.</p>
    <ul>
    <li>If we can, and are allowed to do so under regulatory requirements, we will provide your personal information in a structured, commonly used, machine-readable format.</li>
    </ul>
    <p class="text-clas poppins-bold ">You can withdraw your consent.</p>
    <ul>
    <li>If you have given us any consent we need to use your personal information, you can withdraw your consent at any time by changing your settings in the Nevly app (or sending an email to privacy@nevly.com). (Note, it will have been lawful for us to use the personal information up to the point you withdrew your consent).</li>
    </ul>
<p class="text-clas poppins-bold ">How do I exercise my rights?</p>
    <p class="text-clas poppins-regular ">To exercise any of your rights set out in the previous section, you can contact us through the Nevly app or send us an email at privacy@nevly.com.</p>
    <p class="text-clas poppins-regular ">Nevly will verify your identity before it fulfills your request. We may do that in different ways:</p>

    <ul>
    <li>We may require government-issued identification documents and a recent photograph.</li>
    <li>You may also be required to verify your email address.</li>
    <li>Before Nevly can produce personal Information, Nevly may ask you to submit a signed declaration attesting to your identity under penalty of perjury.</li>
    <li>Depending on your existing relationship with Nevly, Nevly may ask you to provide identifying information you previously provided to Nevly for verification.</li>
    <li>You can designate an authorized agent to make a request on your behalf. Nevly will ask you to provide a written authorization or power of attorney. Please reach out to privacy@nevly.com to process an authorization.</li>

    </ul>
    <p class="text-clas poppins-regular ">Nevly will not discriminate against you in any way because you exercise any rights conferred by this Privacy Notice.</p>
    <p class="text-clas poppins-bold ">If you are unhappy with how we have handled your personal information you can file a formal complaint by sending us an email to complaints@nevly.com.</p>

<p class="text-clas poppins-bold ">Do you share my information with anyone else?</p>
<p class="text-clas poppins-bold ">NEVLY GROUP COMPANIES</p>

    <ul>
    <li>We share your personal information within the Nevly group of companies in order to provide you with the best service.</li>
    </ul>
<p class="text-clas poppins-bold ">OTHER NEVLY CUSTOMERS</p>
    
    <ul>
    <li>Certain Services on the Nevly platform will connect you with other customers. In order to provide you with these services, we may ask you to let us sync your mobile phone contacts. This will help you to identify which of your trusted mobile phone contacts are Nevly customers. Your ‘trusted contacts’ will also be able to see if you are a Nevly customer through our ‘Payment with Friends’ functionality.</li>
    <li>We use technological safeguards to ensure a ‘trusted contact’ is somebody you already know and who knows you (for example, you have each other saved in each other’s mobile phone contacts lists or have already received or given money through a peer-to-peer payment with them).</li>
    <li>Both you and your trusted contact must have synced your mobile phone contacts lists with Nevly to be viewable to each other in the Nevly app.</li>
    <li>We only show your basic contact details in the Nevly app to your trusted contacts who are also Nevly customers (for example, your name (as saved in your friend’s contacts list), mobile phone number, Nevly username, your Nevly profile photo (if you have one)).</li>
    <li>You can, of course, choose not to sync your contacts list with Nevly. This means that you will not be able to identify which of your mobile phone contacts are Nevly customers.</li>
    <li>You can also turn off ‘Payments with Friends’ through the privacy settings in the Nevly app.</li>

    </ul>
  <p class="text-clas poppins-bold ">SUPPLIERS</p>
    
    <ul>
    <li>The list below explains which suppliers we normally share your personal information with.</li>
    </ul>  

    <p class="text-clas poppins-bold ">Suppliers who provide us with IT, payment and delivery services</p>
    
    <ul>
    <li>To help us provide our services to you</li>
    </ul>
    <p class="text-clas poppins-bold ">Our banking and financial services partners and payments networks, including Visa and Mastercard</p>
    
    <ul>
    <li>To help us provide our services to you - this includes banking and lending partners, banking intermediaries and international payment service providers</li>
    </ul>
    <p class="text-clas poppins-bold ">Card manufacturing, personalization and delivery companies</p>
    
    <ul>
    <li>To create and deliver your personalized Nevly Card</li>
    </ul>
    <p class="text-clas poppins-bold ">ADVERTISERS</p>
    
    <ul>
    <li>To promote our services (we provide anonymous information only)</li>
    </ul>
    <p class="text-clas poppins-bold ">Analytics providers and search information providers</p>
    
    <ul>
    <li>To help us improve our website</li>
    </ul>
    <p class="text-clas poppins-bold ">Customer service providers, survey providers and developers</p>
    
    <ul>
    <li>To help us to provide our services to you</li>
    </ul>
     <p class="text-clas poppins-bold ">Communications services providers</p>
    
    <ul>
    <li>To help us send you emails, push notifications and text messages</li>
    </ul>
     <p class="text-clas poppins-bold ">PARTNERS WHO HELP TO PROVIDE OUR SERVICES</p>
    <p class=""text-clas poppin-regular>We may share your personal information with our partners in order to provide you with certain services you have asked us for.</p>
      <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF WHEN WE MIGHT SHARE YOUR INFORMATION WITH OUR PARTNERS</p>
<p class="text-clas poppins-regular ">If you have asked for rent reporting services, we will share relevant information to the provider of rent reporting services.</p>
<p class="text-clas poppins-regular ">We will only share your personal information in this way to provide you with the relevant service.</p>
<p class="text-clas poppins-regular ">From time to time, we may work with other partners to offer you co-branded services or promotional offers, and we will share some of your personal information with those partners. We will always get your consent before sharing your information for these purposes. You can withdraw your consent at any time by contacting us through the Nevly app.</p>
<p class="text-clas poppins-regular ">Our partners will have their own privacy notice explaining how they use your personal information. It's important that you read those privacy notices as well.</p>

 <p class="text-clas poppins-bold ">CREDIT REPORTING AGENCIES</p>
<p class="text-clas poppins-regular ">If you apply for a credit product, we'll share your personal information with credit reporting agencies.</p>
 <p class="text-clas poppins-bold ">FOR LEGAL REASONS</p>
<p class="text-clas poppins-regular ">We also share your personal information with fraud-prevention agencies to check your identity, protect against fraud, comply with anti-money-laundering laws, and confirm that you are eligible to use our products and services.</p>
 <p class="text-clas poppins-bold ">HERE'S AN EXAMPLE OF WHEN WE MIGHT SHARE YOUR PERSONAL INFORMATION FOR LEGAL REASONS</p>
<p class="text-clas poppins-regular ">If you give us false or inaccurate information and we identify fraud, we will let fraud-prevention agencies know. Law-enforcement agencies may request and use this information.</p>
<p class="text-clas poppins-bold ">WE MAY ALSO NEED TO SHARE YOUR PERSONAL INFORMATION WITH OTHER THIRD-PARTY ORGANIZATIONS:</p>
    
    <ul>
    <li>if we have to do so under any law or regulation;</li>
    <li>if we sell our business;</li>
    <li>in connection with criminal or fraud investigations;</li>
    <li>to enforce our rights (and those of customers or others); or</li>
    <li>in connection with legal claims.</li>

    </ul>

    <p class="text-clas poppins-regular ">Nevly does not sell your personal information to third parties. Nevly has both used third parties to collect personal information and has disclosed personal information to third parties to accomplish the business purposes described above.</p>
<p class="text-clas poppins-bold ">CONSUMER PRIVACY NOTICE</p>
    <p class="text-clas poppins-regular ">The Consumer Privacy Notice details our privacy and security practices regarding our relationship with you and provides instructions on how to limit the sharing of your information.</p>
    <p class="text-clas poppins-bold ">NEVLY AND YOUR PERSONAL INFORMATION</p>
    <p class="text-clas poppins-bold ">Will my information go outside the United States?</p>
    <p class="text-clas poppins-regular ">We may transfer your personal information outside the US to provide our services. We may store your personal information outside of the United States or use affiliates or service providers located outside of the United States to offer you our products and services.</p>
    <p class="text-clas poppins-regular ">For example, if you ask to make an international payment, we will send funds to banks overseas. We might also send your information overseas to keep to global legal and regulatory requirements, and to provide ongoing support services.</p>
    <p class="text-clas poppins-regular ">We may share your personal information with credit reporting agencies and fraud-prevention agencies outside the US.</p>
    <p class="text-clas poppins-regular ">We will take all reasonable steps to make sure that your personal information is handled securely and in line with this privacy notice and data protection laws.</p>
    <p class="text-clas poppins-regular ">If you would like more information, please contact us through the Nevly app or by sending an email to privacy@nevly.com.</p>
<p class="text-clas poppins-bold ">How do you protect my personal information?</p>
    
    <ul>
    <li>We store your information on our secure servers.</li>
    <li>Any payment transactions carried out by us or our payment processing providers will be encrypted using Secured Sockets Layer technology or a secure virtual private network.</li>
    <li>If you use a password for the Nevly app or our website, you will need to keep this password confidential. Please do not share it with anyone.</li>
    <li>Unfortunately, providing information online is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee that all information you provide through the Nevly app or our website will be secure. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.</li>
    <li>When you use our services, which include social features and chat functions, do not share any personal information that you don't want to be seen, collected, or used by other users, as this information will become publicly available.</li>

    </ul>
<p class="text-clas poppins-bold ">How long will you keep my personal information for?</p>
 <p class="text-clas poppins-regular ">Under anti-money laundering laws we will hold information about you and your transactions for a minimum of five years.</p>
 <p class="text-clas poppins-regular ">Generally, we will not hold your personal information for more than six years after our business relationship with you has ended, unless we need to hold it for longer because of a potential or ongoing claim, suspected fraud, or another legal reason.</p>

 <p class="text-clas poppins-bold ">How will you keep me updated on how you use my information?</p>
 <p class="text-clas poppins-regular ">If we change the way we use your personal information, we will update this notice and, if appropriate, let you know by text message, by email, through the Nevly app or through our website.</p>
 <p class="text-clas poppins-bold ">Cookies</p>
 <p class="text-clas poppins-regular ">We use cookies to analyze how you use our website. Please read the Cookies Policy for more information about cookies.</p>
 <p class="text-clas poppins-regular ">To download this page, press “command + p” (on a Mac operating system), and “control + p” (on a Windows operating system).</p>
 <p class="text-clas poppins-regular ">This Policy was last updated on May 3h, 2022.</p>
 <p class="text-clas poppins-regular ">We are incorporated in Delaware and have our registered office at A Registered Agent, Inc., 8 The Green, Suite A, Dover, Kent DE, 19901. Our US headquarters is based in Austin, TX. Nevly provides services only to U.S. residents.</p>


  



    

 

          </div>
        `;
        break;
      case 'Terms and Conditions':
        this.popupContent = `
          <div>
          <p class="text-clas poppins-regular">Welcome, and thank you for your interest in the Nevly Holdings Corp.. mobile application and online services (collectively, the “Service”) made available by Nevly Holdings Corp. (“Nevly,” “we,” or “us”).</p>
    <p class="text-clas poppins-regular">Welcome, and thank you for your interest in the Nevly Holdings Corp.. mobile application and online services (collectively, the “Service”) made available by Nevly Holdings Corp. (“Nevly,” “we,” or “us”).</p>
    <p class="text-clas poppins-regular">ELIGIBILITY. You must be at least 18 years old to use the Service. If you are under 18 and we provide you access to the Service, separate terms and conditions may apply. By agreeing to these Terms, you represent and warrant to us that: (1) you are at least 18 years old; (2) you have not previously been suspended or removed from the Service; and (3) your registration and use of the Service is in compliance with any and all applicable laws and regulations.</p>
    <p class="text-clas poppins-regular">ARBITRATION NOTICE. Except for certain kinds of disputes described in Section 14, you agree that disputes arising under these Terms will be resolved by binding, individual arbitration, and BY AGREEING TO THESE TERMS, YOU AND NEVLY ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under this contract (except for matters that may be taken to small claims court). Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury. (See Section 14.)</p>
    <p class="text-clas poppins-regular">1      . Overview of the Service. The Service provides you and other users an account dashboard that enables you to select and access holistic financial support services owned and operated by Nevly, or by independent third-party service providers. Among other services, the Services include access to independent third-party: credit report and improvement services, rental payment reporting services, budget planning services and credit monitoring services. We have no responsibility for any investment, financial decision or action you make based on information or advice from any third-party service provider available on or through the Service. You are solely responsible for any investment decision you make, and any agreement entered by you and the third-party adviser. You understand and agree that your access and use of all third-party services is subject to the terms and conditions applicable to such services. NEVLY IS NOT RESPONSIBLE IN ANY WAY FOR YOUR USE OF THIRD-PARTY SERVICES AND ANY RESULTING DAMAGES. YOU CHOOSE TO USE THE SERVICE AND ANY THIRD-PARTY SERVICE AT YOUR OWN RISK.</p>
    <p class="text-clas poppins-regular">2.Registration and Your Account. You must have a registered account on Nevly to access and use the features of the Service. During registration of your account, you may be required (i) to provide us with some information about yourself, such as your name, phone number, email address, and other contact information, facial identifiers and other biometric data for account verification, your region, government ID card information, Social Security or Individual Taxpayer Identification Number and Service preferences, and (ii) to create a password. You agree that: (a) the information you provide to us is accurate and that you will keep it accurate and up to date at all times; (b) you are solely responsible for maintaining the confidentiality of your account and password on the Service; and (c) you accept responsibility for all activities that occur under your account. If you believe that your account or password is no longer secure, then you must immediately notify us by emailing us at: privacy@nevly.com.</p>
    <p class="text-clas poppins-regular">3.License to the Service. Subject to your complete and ongoing compliance with these Terms, Nevly grants you, solely for your personal, non-commercial use, a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to: (a) install and use one object code copy of any mobile or other downloadable application associated with the Service obtained from a legitimate marketplace on a mobile device that you own or control; and (b) access and use the Service.</p>
    <p class="text-clas poppins-regular">4.License Restrictions. Your right to use the Service is personal to you and you may not share, lease, lend, or otherwise make available the Service (or your access credentials) to any third-party unless otherwise required or permissible by Nevly.</p>
    <p class="text-clas poppins-regular">5.Ownership. Except for the limited rights granted above, Nevly retains all right, title, and interest, including all intellectual property rights, in and to the Service. ALL RIGHTS NOT EXPRESSLY GRANTED UNDER THESE TERMS ARE RESERVED BY NEVLY.</p>
    <p class="text-clas poppins-regular">6.User Generated Content and Testing and Evaluating the Service.</p>
    <p class="text-clas poppins-regular ms-2"> a . User Content. In the event that you provide any comments, information, photographs, reviews, techniques or any other material contained in any communication that you may post, upload or submit through the Service or to Nevly ("User Content"), you shall, and hereby, grant Nevly a perpetual, royalty-free, irrevocable license to use, reproduce, modify, adapt, create derivative works from, publish, translate, license, transmit, distribute and otherwise exploit any or all portions of such User Content. In addition, you hereby irrevocably waive all “moral rights”, or similar protected rights under applicable law, in any such User Content. You also confirm to Nevly that the User Content is wholly original to you; that the User Content does not contain any confidential or proprietary information; that the User Content does not infringe any third-party's rights including intellectual property rights, and that Nevly is free to implement the User Content, at its discretion, as provided by you or modified by us, without obtaining further permission from you or any third-party, and without any additional consideration of any kind. Nevly is not obligated to review, pre-screen, monitor, delete or edit User Content. However, it reserves the right to do so at any time in its sole discretion, and to refuse, delete, remove or edit any User Content, in whole or in part, with or without notice, at its sole discretion and without any responsibility or liability. Notwithstanding the foregoing, Nevly will not be liable for any User Content.</p>
    <p class="text-clas poppins-regular ms-2">b . Feedback. Nevly may periodically request that you provide, and you agree to provide to Nevly, feedback regarding the use, operation, and functionality of the Service (“Feedback”), including any information about known or suspected bugs, errors or compatibility problems, suggested modifications, and user-desired features. You grant Nevly a perpetual, irrevocable, non-exclusive, worldwide, royalty-free, fully paid-up, fully sublicensable, and transferable right to use and incorporate Feedback into any products and services, to make, use, sell, offer for sale, import, and otherwise exploit such products and services, and to otherwise use, copy, distribute, and exploit the Feedback without restriction.</p>
    <p class="text-clas poppins-regular "> 7 . Confidentiality. You will maintain in strict confidence the confidentiality of, and not disclose to any third-party: (a) all non-public information disclosed by Nevly to you in connection with these Terms; and (b) all Feedback, Service performance data. Furthermore, you will not, and will not permit any third-party to, modify, disassemble, decompile, reverse engineer, rent, lease, loan, transfer, or copy any portion of, or circumvent or disable any security or other technological features of the Service.</p>
    <p class="text-clas poppins-regular "> 8 . Term and Termination. Subject to the terms of your Subscription Service (defined below), these Terms will be effective upon the earlier of your acceptance of these Terms or use of the Service and will continue until terminated (the “Term”) ; and we or you may terminate these Terms at any time with or without cause upon 14 days’ prior written notice to the other party. Nevly may terminate these Terms immediately upon notice to you if you are in material breach of any of the provisions of these Terms. Sections 4, 5, 7, 13, 14, 19 – 24 will survive the termination of these Terms. Any continued access to and use of the Service after the Term and termination of these Terms will be pursuant to new terms and conditions.</p>
    <p class="text-clas poppins-regular "> 9 . General Payment Terms</p>
    <p class="text-clas poppins-regular ms-2"> a . Subscription Fee. Our Service has a monthly cost of $69.99 with automatically recurring payments for periodic charges (“Subscription Service”) unless you cancel the Subscription Service, or we terminate it. If you activate the Subscription Service, you authorize Nevly or our third-party payment processors to periodically charge, on a going-forward basis and until cancellation of the Subscription Service, all accrued sums and taxes on or before the payment due date. For information on the Subscription Services, please see [insert hyperlink to the Pricing Page of the Campaign]. You may cancel the Subscription Service by sending an email to support@nevly.com from the email address used to create the user account with the words “CANCEL SUBSCRIPTION” in the subject line. Your cancellation will be effective at the end of the Subscription Service period which you make the cancellation. YOUR CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL DATE IN ORDER TO AVOID CHARGE FOR THE NEXT SUBSCRIPTION PERIOD.</p>
    <p class="text-clas poppins-regular ms-2"> b . Price. Nevly reserves the right to determine pricing for the Service. Nevly will make reasonable efforts to keep pricing information published on the Service up to date. We encourage you to check our pricing page [at: insert hyperlink to the Pricing Page of the Campaign ] periodically for current pricing information. Nevly may change the fees for any feature of the Service, including additional fees or charges, if Nevly gives you advance notice of changes before they apply. Nevly, at its sole discretion, may make promotional offers with different features and different pricing to any of Nevly’s customers. These promotional offers, unless made to you, will not apply to your offer or these Terms.</p>
    <p class="text-clas poppins-regular ms-2"> c . Authorization. You authorize Nevly to charge all sums for the orders that you make and any level of Service you select as described in these Terms or published by Nevly, including all applicable taxes, to the payment method specified in your account. If you pay any fees with a credit card, then Nevly may seek pre-authorization of your credit card account prior to your purchase to verify that the credit card is valid and has the necessary funds or credit available to cover your purchase.</p>
    <p class="text-clas poppins-regular ms-2"> d . Delinquent Accounts. Nevly may suspend or terminate access to the Service, for any account for which any amount is due but unpaid. In addition to the amount due for the Service, a delinquent account will be charged with fees or charges that are incidental to any chargeback or collection of any the unpaid amount, including collection fees. If your payment method is no longer valid at the time a renewal Subscription Service fee is due, then Nevly reserves the right to delete your account and any information associated with your account without any liability to you.</p>
    <p class="text-clas poppins-regular "> 10 . Your Representations, Warranties, and Acknowledgements. You represent and warrant to Nevly and otherwise acknowledge and agree that:</p>
    <p class="text-clas poppins-regular ms-2"> a . Nevly is not and will not be liable to you or responsible for your use of independent third-party service providers;</p>
    <p class="text-clas poppins-regular ms-2"> b . you are solely responsible for making your own financial or investment decisions;</p>
    <p class="text-clas poppins-regular ms-2"> c . you will cooperate with us in connection with any investigation or inquiry relating to your use of the Service;</p>
    <p class="text-clas poppins-regular ms-2"> d . you are solely responsible for independently examining and understanding the tax, legal and accounting consequences related to any investment decision you make based on or otherwise in connection with the Service;</p>
    <p class="text-clas poppins-regular ms-4"> e . you will provide Nevly with information, authorizations and documentation as Nevly may request from time to time to carry out its obligations under these Terms or to avoid violations of any applicable laws, and will notify Nevly promptly in writing of any change in the information so furnished;</p>
    <p class="text-clas poppins-regular ms-4"> f . you will not:</p>
    <p class="text-clas poppins-regular ms-4"> i . use the Service for any illegal purpose or in violation of any local, state, national, or international law;</p>
    <p class="text-clas poppins-regular ms-4"> ii . harass, threaten, demean, embarrass, bully, or otherwise harm any other user of the Service;</p>
    <p class="text-clas poppins-regular ms-4"> iii . violate, encourage others to violate, or provide instructions on how to violate, any right of a third-party, including by infringing or misappropriating any third-party intellectual property right;</p>
    <p class="text-clas poppins-regular ms-4"> iv . access, search, or otherwise use any portion of the Service through the use of any engine, software, tool, agent, device, or mechanism (including spiders, robots, crawlers, and data mining tools) other than the software or search agents provided by Nevly;</p>
    <p class="text-clas poppins-regular ms-4"> v . interfere with security-related features of the Service, including by: 1.disabling or circumventing features that prevent or limit use, printing or copying of any content; or 2. reverse engineering or otherwise attempting to discover the source code of any portion of the Service except to the extent that the activity is expressly permitted by applicable law;</p>
    <p class="text-clas poppins-regular ms-4"> vi . interfere with the operation of the Service or any user’s enjoyment of the Service, including by: 1. uploading or otherwise disseminating any virus, adware, spyware, worm, or other malicious code; 2. making any unsolicited offer or advertisement to another user of the Service; 3. collecting personal information about another user or third-party without consent; or 4. interfering with or disrupting any network, equipment, or server connected to or used to provide the Service;</p>
    <p class="text-clas poppins-regular ms-4"> vii . perform any fraudulent activity including impersonating any person or entity, claiming a false affiliation or identify, accessing any other Service account without permission, or falsifying your age or date of birth;</p>
    <p class="text-clas poppins-regular ms-4"> viii . sell or otherwise transfer the access granted under these Terms;</p>
    <p class="text-clas poppins-regular ms-4"> ix . post or transmit any advertising, charitable requests, business opportunities, memberships, promotional materials or any other solicitation of other users to use goods or services except where authorized;</p>
    <p class="text-clas poppins-regular ms-4"> x . copy or use personal identifying or business contact information about other users without permission; Unsolicited emails, mailings, telephone calls, or other communications to individuals; or</p>
    <p class="text-clas poppins-regular ms-4"> xi . attempt to do any of the acts described in this Section or assist or permit any person in engaging in any of the acts described in this Section.</p>
    <p class="text-clas poppins-regular"> 11 . Coummunication</p>
    <p class="text-clas poppins-regular ms-2"> a . Text Messaging. You agree that Nevly and those acting on our behalf may send you text (SMS) messages at the phone number you provide us. These messages may include operational messages about your use of the Service, as well as marketing messages. Text messages may be sent using an automatic telephone dialing system. Standard data and message rates may apply whenever you send or receive such messages, as specified by your carrier. BY PROVIDING YOUR PHONE NUMBER AND CLICKING “SIGNUP TO NEVLY,” TO THESE TERMS OR SIGNING UP FOR THE SERVICES YOU AGREE TO RECEIVE CALLS AND/OR TEXT MESSAGES AT THE NUMBER YOU PROVIDE TO NEVLY. WE’RE REQUIRED TO INFORM YOU THAT THESE CALLS AND/OR TEXT MESSAGES MAY BE CONSIDERED MARKETING UNDER APPLICABLE LAW, WE MAY BE MADE USING AN AUTODIALER, AND YOUR CONSENT IS NOT A CONDITION OF PURCHASE. IF YOU WISH TO OPT OUT OF ALL TEXT MESSAGES FROM NEVLY, YOU CAN EMAIL SUPPORT@NEVLY.COM OR TEXT THE WORD “STOP” TO THE NUMBER FROM WHICH YOU ARE RECEIVING THE MESSAGES, HOWEVER YOU ACKNOWLEDGE THAT OPTING OUT OF RECEIVING ALL MESSAGES MAY IMPACT YOUR USE OF THE SERVICE. You may continue to receive text messages for a short period while we process your request, including a message confirming the receipt of your opt-out request. Your agreement to receive marketing texts is not a condition of any purchase on or use of the Service.</p>
    <p class="text-clas poppins-regular ms-2"> b . Push Notifications. When you sign up for the Services on your mobile device, you will receive the option to turn on push notifications. If you turn on this feature, you agree to receive push notifications, which are messages an app sends you on your mobile device when you are not in the app. You can turn off notifications by visiting your phone or Services “Notification Settings” page.</p>
    <p class="text-clas poppins-regular ms-2"> c . Email. We may send you promotional emails concerning our products and services, including from third parties. You may opt out of promotional emails by following the unsubscribe instructions in the promotional email itself.</p>
    <p class="text-clas poppins-regular"> 12 . Disclaimers; No Warranties. YOUR ACCESS TO AND USE OF ALL OR ANY PORTION OF THE SERVICE IS ENTIRELY AT YOUR OWN RISK. THE SERVICE IS PROVIDED ON AN “AS IS” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEVLY, ITS AFFILIATES, AND THEIR RESPECTIVE SHAREHOLDERS, DIRECTORS, MEMBERS, MANAGERS, PARTNERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND OTHER AGENTS (COLLECTIVELY, “NEVLY PARTIES”) DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING: (A) WARRANTIES OF MERCHANTABILITY, QUALITY, ACCURACY, TITLE, NON-INTERFERENCE, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE WITH RESPECT TO THE SERVICE; (B) WARRANTIES THAT THE SERVICE, AND ANY DATA PROCESSED THROUGH OR USING THE SERVICE IS SECURE, ACCURATE, FREE FROM BUGS, VIRUSES, INTERRUPTION, ERRORS, THEFT OR DESTRUCTION; AND (C) WARRANTIES OR GUARANTEES THAT YOUR INVESTMENT, RISK CONTROL, RISK MANAGEMENT, OR RETURN OBJECTIVES, EXPECTATIONS, OR TARGETS WILL BE ACHIEVED. IF ANY OF THESE EXCLUSIONS DO NOT APPLY TO YOU OR ARE VOID WITH RESPECT TO YOU UNDER ANY APPLICABLE LAW, THEN ANY WARRANTY THAT CANNOT BE EXCLUDED IS LIMITED TO THE SHORTER OF: (I) 90 DAYS FROM THE DATE OF FIRST DELIVERY OF THE SERVICE; AND (II) THE SHORTEST PERIOD PERMITTED UNDER APPLICABLE LAW.</p>
    <p class="text-clas poppins-regular"> 13 . Limitation of Liability. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: (A) THE NEVLY PARTIES’ AGGREGATE LIABILITY FOR DAMAGES ARISING OUT OF OR UNDER THESE TERMS WILL NOT EXCEED THE GREATER OF: (1) FEES PAID TO YOU IN THE 6 MONTHS PRECEDING THE DATE OF THE APPLICABLE CLAIM; AND (2) THE SUM OF US$100; AND (B) NO NEVLY PARTY WILL BE LIABLE FOR (I) ANY CONSEQUENTIAL, SPECIAL, INDIRECT, INCIDENTAL, OR PUNITIVE DAMAGES, EVEN IF ANY NEVLY PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES, (II) ANY DAMAGES RELATING TO FAILURES OF TELECOMMUNICATIONS, THE INTERNET, ELECTRONIC COMMUNICATIONS, DATA CORRUPTION, SECURITY, LOSS OR THEFT OF DATA, VIRUSES, SPYWARE, LOSS OF BUSINESS, LOSS OF REVENUE, OR LOSS OF PROFITS OR INVESTMENT; AND (III) ANY LOSS, DAMAGE OR LIABILITY RELATED TO OR RESULTING FROM ANY FINANCIAL OR INVESTMENT ADVICE MADE TO YOU. THESE LIMITATIONS WILL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY IN THESE TERMS.</p>
    <p class="text-clas poppins-regular"> 14 . Dispute Resolution and Arbitration</p>
    <p class="text-clas poppins-regular ms-2"> a . Generally. In the interest of resolving disputes between you and Nevly in the most expedient and cost effective manner, and except as described in Section (1) and (2), you and Nevly agree that every dispute arising in connection with these Terms, the Service, and communications from us will be resolved by binding arbitration. Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. This agreement to arbitrate disputes includes all claims arising out of or relating to any aspect of these Terms, the Service, or any communications to or from us, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND NEVLY ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</p>
    <p class="text-clas poppins-regular ms-2"> b . Exceptions. Despite the provisions of Section 14 (1), nothing in these Terms will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (c) seek injunctive relief in a court of law in aid of arbitration; or (d) to file suit in a court of law to address an intellectual property infringement claim.</p>
    <p class="text-clas poppins-regular ms-2"> c . Opt-Out. If you do not wish to resolve disputes by binding arbitration, you may opt out of the provisions of this Section within 30 days after the date that you agree to these Terms by sending a letter to Nevly Holdings Corp., Attention: Legal Department – Arbitration Opt-Out, :1201 Wilson Blvd., Arlington, Virginia 22209 that specifies: your full legal name, the email address associated with your account on the Service, and a statement that you wish to opt out of arbitration (“Opt-Out Notice”). Once Nevly receives your Opt-Out Notice, this Section will be void and any action arising out of these Terms will be resolved as set forth in Section 20. The remaining provisions of these Terms will not be affected by your Opt-Out Notice.</p>
    <p class="text-clas poppins-regular ms-2"> d . Arbitrator. Any arbitration between you and Nevly will be settled under the Federal Arbitration Act and administered by the American Arbitration Association (“AAA”) under its Consumer Arbitration Rules (collectively, “AAA Rules”) as modified by these Terms. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at +1-800-778-7879, or by contacting Nevly. The arbitrator has exclusive authority to resolve any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement.</p>
    <p class="text-clas poppins-regular ms-2"> e . Notice of Arbitration; Process. A party who intends to seek arbitration must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, only if that other party has not provided a current physical address, then by electronic mail (“Notice of Arbitration”). Nevly’s address for Notice is: 1201 Wilson Blvd., Arlington, Virginia 22209. The Notice of Arbitration must: (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought (“Demand”). The parties will make good faith efforts to resolve the claim directly, but if the parties do not reach an agreement to do so within 30 days after the Notice of Arbitration is received, you or Nevly may commence an arbitration proceeding. All arbitration proceedings between the parties will be confidential unless otherwise agreed by the parties in writing. During the arbitration, the amount of any settlement offer made by you or Nevly must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. If the arbitrator awards you an amount higher than the last written settlement amount offered by Nevly in settlement of the dispute prior to the award, Nevly will pay to you the higher of: (a) the amount awarded by the arbitrator and (b) US$10,000.</p>
    <p class="text-clas poppins-regular ms-2"> f . Fees. If you commence arbitration in accordance with these Terms, Nevly will reimburse you for your payment of the filing fee, unless your claim is for more than US$10,000, in which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearing will take place at a location to be agreed upon in the county and state of your residence or billing address, but if the claim is for US$10,000 or less, you may choose whether the arbitration will be conducted: (a) solely on the basis of documents submitted to the arbitrator; (b) through a non-appearance based telephone hearing; or (c) by an in-person hearing as established by the AAA Rules in the county (or parish) of your residence or billing address. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In that case, you agree to reimburse Nevly for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits.</p>
    <p class="text-clas poppins-regular ms-2"> g . No Class Actions. YOU AND WE BOTH AGREE THAT EITHER PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless we and you both agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding.</p>
    <p class="text-clas poppins-regular ms-2"> h . Modifications to this Arbitration Provision. If Nevly makes any future change to this arbitration provision, other than a change to Nevly’s address for Notice of Arbitration, you may reject the change by sending us written notice within 30 days of the change to Nevly’s address for Notice of Arbitration, in which case your account with Nevly will be immediately terminated and this arbitration provision, as in effect immediately prior to the changes you rejected will survive.</p>
    <p class="text-clas poppins-regular ms-2"> i . Enforceability. If Sub-Section (6) or the entirety of this Section is found to be unenforceable, or if Nevly receives an Opt-Out Notice from you, then the entirety of this Section 14 will be null and void and, in that case, the exclusive jurisdiction and venue described in Section 20 will govern any action arising out of or related to these Terms.</p>
    <p class="text-clas poppins-regular "> 15 . Indemnification. You will defend, indemnify, and hold the Nevly Parties harmless against any claim, demand, suit, or proceeding made or brought against any Nevly Party by a third-party and any related expenses (including reasonable attorneys’ fees), losses, damages, liabilities, demands, charges, fees, or claims of any kind or nature whatsoever (collectively, “Losses”) arising from, relating to, or otherwise based on: (a) any breach of these Terms by you; (b) any inaccuracy or omission of any information, data, or other materials provided to Nevly by you or otherwise transmitted to or through the Service; (c) any action for securities law violations instituted by you that is finally resolved by judgment against you. Your obligations under this Section are in addition to any liability you may otherwise have under these Terms.Notice to California Residents. If you are a California resident, under California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210 in order to resolve a complaint regarding the Service or to receive further information regarding use of the Service.</p>
    <p class="text-clas poppins-regular "> 16 . Notice to California Residents. If you are a California resident, under California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210 in order to resolve a complaint regarding the Service or to receive further information regarding use of the Service.</p>
    <p class="text-clas poppins-regular "> 17 . No Support. We are under no obligation to provide support for the Service. In instances where we may offer support, the support will be subject to our relevant policies.</p>
    <p class="text-clas poppins-regular "> 18 . International Use. The Service is intended for visitors located within the United States. We make no representation that the Service is appropriate or available for use outside of the United States. Access to the Service from countries or territories or by individuals where such access is illegal is prohibited.</p>
    <p class="text-clas poppins-regular "> 19 . Notice Regarding Apple. This Section only applies to the extent you are using Nevly on a Device that is an iOS device. You acknowledge that these Terms are between you and Nevly only, not with Apple Inc. (“Apple”), and Apple is not responsible for the Service (including any content on it). Apple has no obligation to furnish any maintenance and support services with respect to the Service. If the Service fails to conform to any applicable warranty, you may notify Apple, and Apple will refund any applicable purchase price for Nevly to you; and, to the maximum extent permitted by applicable law, Apple has no other warranty obligation with respect to the Service. Apple is not responsible for addressing any claims by you or any third-party relating to the Service or your possession or use of the Service, including: (a) product liability claims; (b) any claim that the Service fails to conform to any applicable legal or regulatory requirement; or (c) claims arising under consumer protection or similar legislation. Apple is not responsible for the investigation, defense, settlement, and discharge of any third-party claim that the Service or your possession and use of the Service infringes a third-party’s intellectual property rights. You agree to comply with any applicable third-party terms when using the Service. Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary of these Terms. You represent and warrant that: (i) you are not located in a country that is subject to any U.S. Government embargo or economic sanctions or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. Government list of prohibited, restricted, or blocked parties.</p>
    <p class="text-clas poppins-regular "> 20 . Governing Law and Venue. These Terms are governed by the laws of the State of Texas, without reference to its conflict of laws principles. Any dispute between you and Nevly regarding these Terms will be subject to the exclusive jurisdiction of the federal and state courts located in Travis County, Texas.</p>
    <p class="text-clas poppins-regular "> 21 . No Assignment. You may not assignment your rights under these Terms without our prior written consent.</p>
    <p class="text-clas poppins-regular "> 22 . No Waiver. Nothing contained in these Terms constitutes a waiver by you of any of your legal rights under U.S. federal securities laws or any other laws that are not permitted to be contractually waived.</p>
    <p class="text-clas poppins-regular "> 23 . Independent Contractor. Nothing in these Terms will be construed as creating any agency, partnership, joint venture, or other form of joint enterprise or employment relationship between you and Nevly. You are not an employee, representative, adviser, consultant, or other agent of Nevly as a result of these Terms or use of the Services. The parties will not have any express or implied right of authority to assume or create any obligations on behalf of or in the name of the other or to bind the other to any contract, agreement or undertaking with any third-party.</p>
    <p class="text-clas poppins-regular "> 24 . Agreement. These Terms are the entire agreement between you and Nevly and supersedes any other communications with respect to the Service.</p>







    </div>
        `;
        break;
      case 'Security Policy':
        this.popupContent = `
      <div>
    <p class="text-clas poppins-bold ">Introduction - </p>
    <p class="text-clas poppins-regular">
    At Nevly, we develop simple, secure and 100% digital solutions so that you can have control over your credit and money, literally in the palm of your hands. We value our members and understand how important cybersecurity is for them to enjoy our services with peace of mind.
    </p>
    <p class="text-clas poppins-regular">
    We apply the defense in depth strategy by implementing more than one layer of security, with the aim of mitigating the possible compromise of one of those defense layers. The security of your information is in our DNA, and we provide here a summary of our Cybersecurity Policy ("Policy") so that you can learn a little more about our guidelines for protecting your data.
    </p>
    <p class="text-clas poppins-regular">Scope - </p>
    <p class="text-clas poppins-regular">
    Nevly Holdings Corp. (“Nevly”) and all of its employees, consultants, third parties, suppliers and partners are subject to the Policy if they access, store, process or transmit information belonging to, or under the custody of, Nevly.
    </p>
    <p class="text-clas poppins-regular">Objective - </p>
    <p class="text-clas poppins-regular">Maintain the confidentiality, integrity and availability of information owned by or under the custody of Nevly;</p>
    <p class="text-clas poppins-regular">Establish measures to protect the infrastructure that supports business services and activities; and</p>
    <p class="text-clas poppins-regular">Prevent, detect and reduce vulnerability to incidents related to the cyber environment.</p>
    <p class="text-clas poppins-regular">Information Security Principles - </p>
    <p class="text-clas poppins-regular">Confidentiality: Ensure that information is made available or disclosed only to authorized individuals, entities or processes. </p>
    <p class="text-clas poppins-regular">Integrity: Ensure that information is accurate, complete and protected from undue, intentional or accidental changes. </p>
      <p class="text-clas poppins-regular">Availability: Ensure that information is accessible and usable on demand by authorized individuals, entities or processes.</p>
    <p class="text-clas poppins-regular">Guidelines - </p>
      <p class="text-clas poppins-regular">Access to systems, resources and other information assets must be granted through valid authentication and based on:</p>
    <p class="text-clas poppins-regular">Business need; </p> 
     <p class="text-clas poppins-regular">The principle of least privilege; and</p>
    <p class="text-clas poppins-regular">Segregation of duties. </p>
    <p class="text-clas poppins-regular">Accesses should be managed through a lifecycle from creation to deactivation, including periodic reviews for accuracy and adequacy. </p>
      <p class="text-clas poppins-regular">Passwords must follow complexity requirements and be unique. They must not be reused, shared, stored in files or written down anywhere.</p>
    <p class="text-clas poppins-regular">Logs and audit trails must be enabled in production environments, protected from unauthorized access and changes, and record:</p> 
     <p class="text-clas poppins-regular">What activity was performed.</p>
    <p class="text-clas poppins-regular">What activity was performed.</p>
    <p class="text-clas poppins-regular">When the activity was performed.</p>
      <p class="text-clas poppins-regular">What the activity was performed on. </p>
    <p class="text-clas poppins-regular">Cryptographic algorithms should be applied as needed to data at rest, in transit, and/or in use. </p> 
     <p class="text-clas poppins-regular">Tools and processes to monitor and prevent sensitive information from leaving an organization's internal environment without authorization must be implemented. </p>
    <p class="text-clas poppins-regular">Solutions and/or processes that allow the prevention, detection, and identification of attacks on Nevly’s infrastructure components must be implemented. </p>
     <p class="text-clas poppins-regular">A vulnerability lifecycle management process from identification to remediation, including guidelines for documentation, reporting, and disclosure, must be in place. </p> 
     <p class="text-clas poppins-regular">Anti-malware detection, prevention and recovery software solutions or equivalent controls must be implemented to protect the Nevly environment.</p>
    <p class="text-clas poppins-regular">Information assets considered critical, which store and/or process sensitive information, must be restricted to segregated areas of the network, with appropriate access control. </p>
     <p class="text-clas poppins-regular">Production databases must have sufficient backups to restore systems to operation in the event of data loss or service interruption. </p> 
     <p class="text-clas poppins-regular">During the software development life cycle (“SDLC”), security requirements must be applied to ensure the confidentiality, integrity and availability of information. </p>
    <p class="text-clas poppins-regular">A security assessment must be performed prior to implementing any new technology, tool or solution into a product’s production environment. </p>
     <p class="text-clas poppins-regular">Procedures and controls aimed at preventing, treating, and reducing Nevly's vulnerability to cybersecurity incidents, in addition to guidelines for recording, analyzing the cause and impact, and assessing the relevance of incidents, must be implemented. </p> 
     <p class="text-clas poppins-regular">Information should be classified to assist in consistent mapping of information assets and establish the appropriate level of protection in its storage, transmission, and use. </p>
    <p class="text-clas poppins-regular">The Business Continuity Plan (“BCP”) aims to ensure that, in a crisis situation, essential and critical processes are properly maintained, thus preserving the continuity of business functions, operations and critical services. The BCP must be tested annually.</p>
      <p class="text-clas poppins-regular">Awareness training should be mandatory and carried out annually, presenting information security principles to help employees recognize risk situations and act correctly. </p> 
     <p class="text-clas poppins-regular">Consumption and sharing of incident and threat information with other local and global institutions must be done through secure channels. </p>
    <p class="text-clas poppins-regular">Nevly's Cybersecurity Policy must be reviewed at least annually.</p>
      <p class="text-clas poppins-regular">Security Recommendations for Customers - </p> 
     <p class="text-clas poppins-regular">Create complex passwords and do not use your personal data or information in the composition (e.g.: date of birth or names of family members). Give preference to passwords composed of at least 4 random words.</p>
    <p class="text-clas poppins-regular">Change your password whenever there is any indication or suspicion of a leak or compromise of your credentials. </p>
      <p class="text-clas poppins-regular">Avoid using the same password in more than one service. If possible, use a password manager to store and manage credentials. </p> 
     <p class="text-clas poppins-regular">Your password is personal and non-transferable, so do not share it or write it down in places where other people have easy access (e.g. notebooks and notepads). </p>
    <p class="text-clas poppins-regular">If possible, enable a second authentication factor (e.g. biometrics or SMS). </p>
     <p class="text-clas poppins-regular">Avoid accessing banking websites and applications or carrying out transactions on third-party, public (e.g. Internet cafe) or untrusted devices (computers, cell phones and tablets). The same goes for public wireless networks (Wi-Fi). </p> 
     <p class="text-clas poppins-regular">Keep your devices with updated operating systems and applications. </p>
    <p class="text-clas poppins-regular">Try installing an antivirus solution on your computer and keep it updated. </p>
     <p class="text-clas poppins-regular">Avoid opening emails whose sender or content is unknown;</p> 
     <p class="text-clas poppins-regular">Do not click on links provided in suspicious and/or unknown emails or SMS messages. </p>
    <p class="text-clas poppins-regular">Do not download or run files attached to suspicious emails (e.g. with grammatical errors or an urgent tone). </p>
    <p class="text-clas poppins-regular">Never provide personal, corporate or financial information in calls or messages received from unknown people. The same goes for suspicious websites, always check if the website you are accessing is actually the real one. </p>
    <p class="text-clas poppins-regular">Lock the device used to access banking websites and applications when you are not using it. </p>
    <p class="text-clas poppins-regular">Avoid lending your cell phone to strangers. </p>
    <p class="text-clas poppins-regular">Always keep at least one backup copy of important data. </p>
    

      
      
      
      </div>
        `;
        break;
      default:
        this.popupContent = '';
    }

    const modalElement = new window.bootstrap.Modal(document.getElementById('privacyModal'));
    modalElement.show();
  }
  openServiceModal(serviceName: string) {
    this.serviceSelected.emit(serviceName);
  }
  
}
