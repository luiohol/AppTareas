import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../Models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task')
  task!: Task;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }
  removeTask(task: Task) {
    const response = confirm ('Are you sure to delete?');
      if ( response ){
        this.dataService.removeTask(task);
      }
  
}
}
