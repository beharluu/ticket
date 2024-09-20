import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTicketComponent } from './edit-ticket.component';
import { DetailsComponent } from './details/details.component';
import { ActivityComponent } from './activity/activity.component';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';

const routes: Routes = [
  {
    path: '', component: EditTicketComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details', component: DetailsComponent
      },
      {
        path: 'activity', component: ActivityComponent
      },
      {
        path: 'comments', component: CommentsComponent
      },
      {
        path: 'attachments', component: AttachmentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTicketRoutingModule { }
