import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'hola';
  task = [
    "Instalar Angular CLI",
    "Crear un nuevo proyecto",
    "Crear un nuevo componente"

  ]
}
document.write("mimimimimioms")