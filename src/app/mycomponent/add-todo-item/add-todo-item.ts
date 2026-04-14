import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-item',
  standalone:true,
  imports: [FormsModule],
  
  templateUrl: './add-todo-item.html',
  styleUrl: './add-todo-item.css',
})
export class AddTodoItem {

  title: string = '';
  desc: string = '';

  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>(); 

  onSubmit() {
    if (!this.title || !this.desc) {
      alert("Please fill all fields");
      return;
    }

    const todo = new Todo(0, this.title, this.desc, true);

    this.addTodoEvent.emit(todo);   

    // reset form
    this.title = '';
    this.desc = '';
  }
}
