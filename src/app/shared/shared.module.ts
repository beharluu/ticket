import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IconComponent,
    SubtaskListComponent,
    SubtaskListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    IconComponent,
    SubtaskListComponent
  ]
})
export class SharedModule { }
