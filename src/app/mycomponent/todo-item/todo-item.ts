import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../Todo';
import { AddTodoItem } from "../add-todo-item/add-todo-item";


@Component({
  selector: 'app-todo-item',
   standalone: true, 
  imports: [AddTodoItem],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();

onclick(todo:Todo){
  console.log("todo delete btn")
  this.todoDelete.emit(todo);  
}


}
