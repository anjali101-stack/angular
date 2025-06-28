import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  count = 0

  HandleCount(val:String){
    if(val == 'add'){
      this.count = this.count+1
    }else if(val == 'sub'){
      if(this.count <= 0){
        alert("Can't do decrement ")
      }else{
        this.count = this.count-1
      }
    }else{
      this.count = 0
    }
  }
}
