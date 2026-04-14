import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Todos } from "./mycomponent/todos/todos";

@Component({
  selector: 'app-root',
  imports: [Todos, RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title = 'Todo-list';

// constructor(){
//   setTimeout(()=>{
//     this.title = "changed title";
//   }, 2000);
// }
}