import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
        {   path: '', redirectTo: 'ticket', pathMatch: 'full' },
        {
          path: 'ticket', loadChildren: () => import('./modules/edit-ticket/edit-ticket.module').then(x => x.EditTicketModule)
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
