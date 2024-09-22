import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ticket } from '../../../../models';


@Component({
  selector: 'app-details-main',
  templateUrl: './details-main.component.html',
  styleUrls: ['./details-main.component.scss']
})
export class DetailsMainComponent implements OnInit {

  @Input('data') ticket: Ticket | null = null; 

  constructor() { }

  updateForm: FormGroup = new FormGroup({
    status: new FormControl(false),
    assignee: new FormControl(''),
    coOwner: new FormControl(''),
    importance: new FormControl(''),
    customerName: new FormControl(''),
    invoiceId: new FormControl(null),
  })


  ngOnInit(): void {
    if(this.ticket) this.patchDataToForm();
  }

  patchDataToForm() {
    this.updateForm.patchValue({
      status: this.ticket?.status,
      assignee: this.ticket?.assignee,
      coOwner: this.ticket?.coOwner,
      importance: this.ticket?.importance,
      customerName: this.ticket?.customerName,
      invoiceId: this.ticket?.invoiceId
    })
  }

  updateTicket() {
    console.log(this.updateForm.value); // Log the current value of the form
  }

  

}
