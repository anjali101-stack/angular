import { Routes } from '@angular/router'
import { Counter } from './counter/counter'
import { ElseIFExample } from './else-ifexample/else-ifexample'
import { Todolist } from './todolist/todolist'
import { Header } from './header/header'
import { Login } from './login/login'
import { Pagenotfound } from './pagenotfound/pagenotfound'
import { Home } from './home/home'

export const routes: Routes = [
 
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'ifelse',
    component: ElseIFExample
  },
  {
    path: 'todo',
    component: Todolist
  },
    {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '**',
    component: Pagenotfound
  }
   
]
