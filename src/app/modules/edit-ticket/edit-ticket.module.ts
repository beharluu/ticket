import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTicketRoutingModule } from './edit-ticket-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditTicketComponent } from './edit-ticket.component';
import { DetailsComponent } from './details/details.component';
import { ActivityComponent } from './activity/activity.component';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { DetailsMainComponent } from './details/details-main/details-main.component';


@NgModule({
  declarations: [
    EditTicketComponent,
    DetailsComponent,
    ActivityComponent,
    CommentsComponent,
    AttachmentsComponent,
    DetailsMainComponent
  ],
  imports: [
    CommonModule,
    EditTicketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditTicketModule { }
