import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { EventExamples } from './event-examples/event-examples';
import { ElseIFExample } from './else-ifexample/else-ifexample';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
