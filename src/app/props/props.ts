import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props',
  imports: [],
  templateUrl: './props.html',
  styleUrl: './props.css'
})
export class Props {
@Input () user:string=""
}
