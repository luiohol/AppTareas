import { Component, OnInit, EventEmitter, Output } from '@angular/core';


import { Task } from '../../Models/task';

 //importamos la clase tareas de la carpeta models

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  title!: string ;
  description!: string;
  @Output() taskAdded = new EventEmitter<Task>(); //aca se aclara el import Task

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.taskAdded.emit({
      title: this.title, 
      description: this.description, 
      hide: true
    });
    this.title = '';
    this.description = '';
  }

}
