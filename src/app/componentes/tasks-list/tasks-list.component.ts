import { Component, OnInit } from '@angular/core';

import { Task } from '../../Models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];//las tareas es un arreglo de tareas 

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getTask();
  }

  addTask(task: Task){
    this.dataService.addTask(task);
  }

}
