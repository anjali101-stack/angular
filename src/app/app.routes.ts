import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { ElseIFExample } from './else-ifexample/else-ifexample';
import { Todolist } from './todolist/todolist';

export const routes: Routes = [
    { 
        path:'counter', component:Counter
    },
    { 
        path:'ifelse', component:ElseIFExample
    },
    { 
        path:'todo', component:Todolist
    },
];
