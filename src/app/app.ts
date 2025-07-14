import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { EventExamples } from './event-examples/event-examples';
import { ElseIFExample } from './else-ifexample/else-ifexample';
import { Todolist } from './todolist/todolist';
import { Header } from './header/header';
import { Lifecyclemethode } from './lifecyclemethode/lifecyclemethode';
import { Ecom } from './ecom/ecom';

@Component({
  selector: 'app-root',
  imports: [Ecom, Header, RouterOutlet, Lifecyclemethode],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
