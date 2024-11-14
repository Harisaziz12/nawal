import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
// import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  faArrowRight = faArrowRight;
  faTimes = faTimes;

  @Output() closePopup = new EventEmitter<void>();

  ngOnInit(): void {
    // const inputElement = document.getElementById('phone') as HTMLInputElement;

    // if (inputElement) {
    //   intlTelInput(inputElement, {
    //     initialCountry: 'US',
    //     separateDialCode: true,
    //     utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js'
    //   });
    // }
  }

  close() {
    console.log("Popup close() method called.");
    this.closePopup.emit();
  }
}
