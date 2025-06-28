import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { EventExamples } from './event-examples/event-examples';
import { ElseIFExample } from './else-ifexample/else-ifexample';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Counter, EventExamples, ElseIFExample, Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-start';
  handleClick(){
    alert("BUTTON CLICKED")
    this.OtherComponent()
  }
  OtherComponent(){
    console.log("Other componetn called")
  }
}
