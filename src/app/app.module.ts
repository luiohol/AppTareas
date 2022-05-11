import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //agregamos modulo de formulario

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { TasksListComponent } from './componentes/tasks-list/tasks-list.component';
import { TaskComponent } from './componentes/task/task.component';

import { DataService} from './services/data.service';//importamos la carpeta de servicios que creamosS

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskAddComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Lo agregamos en imports
  ],
  providers: [DataService], //lo agregamos al data servis que creamos
  bootstrap: [AppComponent]
})
export class AppModule { }
