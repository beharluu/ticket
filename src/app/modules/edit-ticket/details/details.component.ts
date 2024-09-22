import { Component } from '@angular/core';
import { TicketService } from '../../../services';
import { SubTask, Ticket } from '../../../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  ticket: Ticket | null = null; // Initialize as null
  subTasks: SubTask[] = [];

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket() {
    this.ticketService.getTicket().subscribe(
      res => {
        this.ticket = res;
        this.subTasks = res.subTasks;
      },
      err => {
        alert('Something went wrong..');
      }
    )
  }

}
