import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginPhonenoComponent } from './login-phoneno/login-phoneno.component';
import { FutureBuildingComponent } from './future-building/future-building.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { CreditBuilderComponent } from './credit-builder/credit-builder.component';
import { MoneyAccessComponent } from './money-access/money-access.component';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { NevlyMoneyComponent } from './nevly-money/nevly-money.component';
import { MoneyServicesComponent } from './money-services/money-services.component';
import { FeaturedComponent } from './featured/featured.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PalnsSubscriptionComponent } from './palns-subscription/palns-subscription.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QuestionsSectionComponent } from './questions-section/questions-section.component';
import { FaqsHeroComponent } from './faqs-hero/faqs-hero.component';
import { PopupComponent } from './popup/popup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterModalComponent } from './footer-modal/footer-modal.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpopupComponent } from './loginpopup/loginpopup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesMenuComponent } from './services-menu/services-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    LoginPhonenoComponent,
    FutureBuildingComponent,
    SecondSectionComponent,
    CreditBuilderComponent,
    MoneyAccessComponent,
    CreditReportComponent,
    NevlyMoneyComponent,
    MoneyServicesComponent,
    FeaturedComponent,
    PalnsSubscriptionComponent,
    FaqsComponent,
    QuestionsSectionComponent,
    FaqsHeroComponent,
    PopupComponent,
    FooterModalComponent,
    FooterComponent,
    LoginpopupComponent,
    ServicesMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  CarouselModule,

  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
