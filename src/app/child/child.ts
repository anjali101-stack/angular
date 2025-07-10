import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
@Input() user:string = ""
 email = 'john.doe@example.com';
  memberSince = 'January 2024';
  role = 'Regular User';
}
