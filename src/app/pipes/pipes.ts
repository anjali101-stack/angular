import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyPipePipe } from '../pipe/currency-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CurrencyPipePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  title  = "Anguler piplines complete example "
  name = "ANJALI GIRI"
  date = new Date()
  ammount = 10

}
