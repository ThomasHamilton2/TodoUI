import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todoList$$ = new BehaviorSubject<Todo[]>([]);

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  private async getTodoList() {
    const todoList = await this.todoService.getTodoList().toPromise();
    this.todoList$$.next(todoList);
  }
}
