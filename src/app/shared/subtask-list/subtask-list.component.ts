import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubTask } from '../../models';

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.scss']
})
export class SubtaskListComponent implements OnInit {

  @Input('data') subTasks: SubTask[] = [];
  @ViewChildren('taskInput') taskInputs!: QueryList<ElementRef>;

  tasksForm: FormGroup;
  taskChecked: number = 0;

  constructor(private fb: FormBuilder) {
    this.tasksForm = this.fb.group({
      tasks: this.fb.array([]) // Initialize with an empty FormArray
    });
  }

  ngOnInit(): void {
    this.tasksForm = this.fb.group({
      tasks: this.fb.array(
        this.subTasks.map(el => this.createTask(el.name, el.checked))
      )
    });
    this.countTaskCheck();
   }

  createTask(name: string, checked: boolean): FormGroup {
    return this.fb.group({
      name: new FormControl(name),
      checked: new FormControl(checked)
    });
  }

  get tasks(): FormArray {
    return this.tasksForm.get('tasks') as FormArray;
  }

  addTask() {
    this.tasks.push(this.createTask('', false)); // Add new task with empty name

    setTimeout(() => {
      const lastInput = this.taskInputs.last.nativeElement; // After added new task focus on input
      lastInput.focus();
    });
  }

  changeCheckStatus(index: number) {
    const taskControl = this.tasks.at(index);
    const checkedControl = taskControl.get('checked');

    if (checkedControl) {
      const currentCheckedValue = checkedControl.value;
      checkedControl.setValue(!currentCheckedValue);
    }
    this.countTaskCheck()
  }

  countTaskCheck() {
    this.taskChecked = this.tasks.controls.filter(task => task.value.checked).length;
  }

  get taskPercentage(): string {
    const checkedCount = this.taskChecked;
    const totalCount = this.tasks.controls.length;
    return totalCount > 0 ? ((checkedCount / totalCount) * 100).toFixed(2) : '0';
  }

  submitTasks() {
    console.log(this.tasksForm.value); // Log the current value of the form
  }

}
