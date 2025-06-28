import { Component } from '@angular/core';

@Component({
  selector: 'app-else-ifexample',
  imports: [],
  templateUrl: './else-ifexample.html',
  styleUrl: './else-ifexample.css'
})
export class ElseIFExample {
  color = 5

  handleClick(val:number){
    this.color = val

  }

  handleInput(event:Event){
    console.log(event)
    this.color = parseInt((event.target as HTMLInputElement ).value)
  }
}
