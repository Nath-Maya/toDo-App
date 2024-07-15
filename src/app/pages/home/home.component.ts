import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Pedir citas medicas',
    'Llamar a la universidad',
    'Hacer almuerzo'
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    //metodo para agregar un nuevo elemento al array sin resetearlo
    this.tasks.update((tasks) => [...tasks, newTasks]) //se recibe el estado anterior y se agrega la nueva tarea
  }

  //Eliminar una tarea teniendo en cuenta con su idex
  deleteTask(index : number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index)) //se deja por fuera el elemento que coincida con el idex.
  }
}
