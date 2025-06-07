import { Component, signal, effect, computed } from '@angular/core';
import { Task } from '../../models/task.models';
import { CommonModule } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  listaRenderizar = signal<Task[]>([
    // {
    //   id: Date.now(),
    //   title: "Aprender js",
    //   completed: false
    // },

    // {
    //   id: Date.now(),
    //   title: "Aprender css",
    //   completed: false
    // },

    // {
    //   id: Date.now(),
    //   title: "Aprender html",
    //   completed: false
    // },


  ])

  constructor(){
    effect(() => {
      console.log('run efect (algo cambiooooo)');
      const tasks = this.listaRenderizar()
      localStorage.setItem('tasks',JSON.stringify(tasks))
    })
  }

ngOnInit(){
  const storage = localStorage.getItem('tasks')
  if(storage){
    const tasks = JSON.parse(storage);
    this.listaRenderizar.set(tasks);
  }
}

  // validad 
  newCtrlChange = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  });


  changeHandler() {
    // validad validadores 🤨
    if (this.newCtrlChange.valid && this.newCtrlChange.value.trim() !== "") {

      const value = this.newCtrlChange.value
      this.addTask(value)
      this.newCtrlChange.setValue("")
    }
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.listaRenderizar.update(lap => [...lap, newTask])
  }

  deleteTask(index: number) {
    this.listaRenderizar.update(listaRenderizar =>
      listaRenderizar.filter((tarea, position) => position !== index))
  }

  changeValue(index: number) {
    let con = 0
    this.listaRenderizar.update((listaRenderizar) => {
      return listaRenderizar.map((tarea, position) => {
        if (position === index) {
          return { ...tarea, completed: !tarea.completed }
        }
        console.log(tarea.completed)
        return tarea;
      })
    })
  }


  updateTasEditingMode(index: number) {
    this.listaRenderizar.update(prevState => {
      return prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true
          }
        }

        return {
          ...task,
          editing: false
        }
      })
    })
  }
  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.listaRenderizar.update(prevState => {
      return prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false
          }
        }

        return task;
      })
    })
  }


  filter = signal('all')

  changeFilter(filter: string) {
    this.filter.set(filter)
  }
  tareasByFilter = computed(() => {
    const filters = this.filter();
    const tasks = this.listaRenderizar();
    if (filters === 'pending') {
      return tasks.filter(task => !task.completed)
    }
    else if (filters === 'completed'){
      return tasks.filter(task => task.completed)
    }
    else
      return tasks

  }
  )
  con = computed(() => { return this.tareasByFilter().filter(tarea => tarea.completed == false).length })

}
