import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
  task = ''
  TodoListArr: { id: number; task: string }[] = []
  AddTask () {
   this.TodoListArr.push({id:this.TodoListArr.length+1, task : this.task})
   this.task = ""
   console.log(this.TodoListArr)
  }

  DeleteTask(id:number){
    this.TodoListArr = this.TodoListArr.filter((item)=> item.id != id)

  }
}
