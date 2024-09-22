import { Injectable } from '@angular/core';
import { Ticket } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTicket(): Observable<Ticket> {
    // Here we are simulating an API call by using static data. 
    const ticket = {
      status: 'Paid',
      assignee: 'Brian Griffin',
      coOwner: 'Peter Griffin',
      importance: 'Very high',
      customerName: 'Alex',
      invoiceId: 1239492,
      subTasks: [
        {
          name: 'Send invoice to collections agency',
          checked: false,
        },
        {
          name: 'Write an email to them to follow-up',
          checked: true,
        },
        {
          name: 'Send paper mail to account',
          checked: false,
        }
      ]
    };
  
    return of(new Ticket(ticket)); // Wrap in an Observable
  }

}
