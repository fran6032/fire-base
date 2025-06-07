import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  // Propiedades básicas
  welcome = "hola"
  edad = 18
  disabled = false
  mijo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

  // Array de tareas
  task = [
    "Instalar Angular CLI",
    "Crear un nuevo proyecto",
    "Crear un nuevo componente"
  ]

  // Objeto persona
  person = {
    name: "Nicolas",
    age: 20,
    city: "Santiago"
  }

  // Signals
  name = signal("Juan")
  nombreReactivo = signal("Sergio")

  // Manejadores de eventos de clic
  clickHandler() {
    alert("click me")
  }

  dbclickHandler() {
    alert("click me")
  }

  // Manejadores de eventos de input
  changeHandler(evento: Event) {
    alert("sisisisi")
  }

  keyDownHandler(evento: KeyboardEvent) {
    alert((evento.target as HTMLInputElement).value)
  }

  // Manejador de reactividad
  changeReactive(event: Event) {
    const inputs = (event.target as HTMLInputElement).value
    const nombre = inputs
    this.nombreReactivo.set(nombre)
  }


  //mio
  title = "Mi parte"

  listaAprendizaje = [
    "Exportar elementos de TS a HTML",
    "uso de 'for' en angular",
    "datos primitivos",
    "eventos",
    "signals",]

  population = signal({
    Mexico: 126000000,
    Chile: 18000000,
    Colombia: 50000000,
  })


  clicky(){
    alert("click me")
  }
  keyDown(){
    alert("keyDown")
  }

  algoCambio(event: Event){
    const inputs = (event.target as HTMLInputElement).value
    alert (inputs)
}
oprimirTecla(event: KeyboardEvent){
  alert("Oprimiste una tecla: " + event.key)
}
combinacionTeclas(){
  alert("combinacion de teclas")
}

valorNativo =signal("Juan Gerardo Guzman")
cambioReactivo(event: Event){
  const valor = (event.target as HTMLInputElement).value
  const nuevoValor = valor 
  this.valorNativo.set(nuevoValor)
}


listaRenderizar = signal([
  "Exportar elementos de TS a HTML",
  "uso de 'for' en angular",
  "datos primitivos",
  "eventos",
  "signals",])

  con = this.listaRenderizar().length

  controlColor = new FormControl();
  widthControl = new FormControl(50,{
    nonNullable : true
  });
  heightControl = new FormControl(0,{
    nonNullable : true
  });
  nameControl = new FormControl(0,{
    nonNullable : true,
    validators: [
      Validators.required,
      Validators.minLength(3)

    ]
  });

}