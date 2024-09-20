import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTicketRoutingModule } from './edit-ticket-routing.module';
import { EditTicketComponent } from './edit-ticket.component';
import { DetailsComponent } from './details/details.component';
import { ActivityComponent } from './activity/activity.component';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';


@NgModule({
  declarations: [
    EditTicketComponent,
    DetailsComponent,
    ActivityComponent,
    CommentsComponent,
    AttachmentsComponent
  ],
  imports: [
    CommonModule,
    EditTicketRoutingModule
  ]
})
export class EditTicketModule { }
