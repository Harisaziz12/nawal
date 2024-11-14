import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-modal',
  templateUrl: './footer-modal.component.html',
  styleUrls: ['./footer-modal.component.css']
})
export class FooterModalComponent {
  faTimes = faTimes;
  faCheck = faCheck;

  @Input() modalContent: any;  // Accept the detailed content dynamically from the parent

  constructor(public modal: NgbActiveModal) {}  // Inject NgbActiveModal

  close() {
    this.modal.close();  // Close the modal when called
  }
}
