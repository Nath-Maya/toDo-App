import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal <Task[]> ([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Estudiar Platzi',
      completed: false
    }
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask)
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  //Eliminar una tarea teniendo en cuenta con su idex
  deleteTask(index : number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index)) //se deja por fuera el elemento que coincida con el idex.
  }
}
