import { Component } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Props } from '../props/props'

@Component({
  selector: 'app-home',
  imports: [Props, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName = 'annu'

  onUserchange(user:string){
    this.userName = user
  }
}
