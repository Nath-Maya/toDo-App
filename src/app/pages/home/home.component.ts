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
    this.tasks.update((tasks) => [...tasks, newTasks])
  }
}
