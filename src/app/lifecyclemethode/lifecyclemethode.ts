import { Component } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-lifecyclemethode',
  imports: [],
  templateUrl: './lifecyclemethode.html',
  styleUrl: './lifecyclemethode.css'
})
export class Lifecyclemethode {
  constructor(){
    console.log("Component on mount ! Constructor")
  }

  ngOnInit(){
        console.log("Component initialized ! NGONININT")

  }

}
