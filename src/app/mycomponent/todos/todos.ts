import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../Todo';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { TodoItem } from "../todo-item/todo-item";
import { AddTodoItem } from "../add-todo-item/add-todo-item";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItem, AddTodoItem],
    standalone: true, 
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {

    todos: Todo[] = []; 
    //  localitem: string | null;

  // constructor() {
  //   // add 3 default todos
  //   // this.todos = [
  //   //   new Todo(1, "Learn Angular", "Basics of Angular", true),
  //   //   new Todo(2, "Build Todo App", "Practice project", true),
  //   //   new Todo(3, "Learn Spring Boot", "Backend integration", false)
  //   // ];

  //   this.localitem=localStorage.getItem("todos");

  //   if(this.localitem==null){
  //     this.todos=[];
  //   }
  //   else{
  //     this.todos=JSON.parse(this.localitem);
  //   }
  // }

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {   

      const localitem = localStorage.getItem("todos");

      if (localitem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(localitem);
      }
    }
  }
   deleteTodo(todo:Todo){
    console.log(todo);
      // first get index of that todo
 const index = this.todos.indexOf(todo);   

  if (index !== -1) {
    this.todos.splice(index, 1);   
  } 
 localStorage.setItem("todos", JSON.stringify(this.todos));
}

  addTodo(todo:Todo){
    todo.sno=this.todos.length+1;

    this.todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
