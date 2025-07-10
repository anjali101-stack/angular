import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  title  = "Anguler piplines complete example "
  name = "ANJALI GIRI"
  date = new Date()
  ammount = 10

}
