import { Injectable } from '@angular/core';

import { Task } from '../Models/task';//importamos los modelos en servicios


@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task []; //arreglo de tipo de tareass
  constructor() { 
    this.tasks = [];
  }
  getTask(): Task[] { //traer tareas
    if(localStorage.getItem('tasks') === null) {
      this.tasks= [];
     }else {
      this.tasks = JSON.parse(localStorage.getItem('tasks') || "[]")//arreglo para que no de error si esta vacia || "[]"
     }
     return this.tasks;
    }

  addTask (task: Task):void { //agregando tareas
    this.tasks.unshift(task);
    let tasks;
    if (localStorage.getItem('tasks') === null ){
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON. stringify(tasks));//combierte en stream y lo guardamos en local
    } else {//que pasa si tenemos datos anteriores.
      tasks = JSON.parse(localStorage.getItem('tasks') || "[]");//areglo con ! PROBANDO
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }     
  }

    removeTask(task: Task) { //eliminando tareas
      for (let i = 0; this.tasks.length; i++) {//lo busca, si coincide la tarea la elimina
        if(task.title == this.tasks[i].title) {
          this.tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
      }
    }
}
