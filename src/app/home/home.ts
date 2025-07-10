import { Component } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Props } from '../props/props'
import { Child } from '../child/child'
import { User } from '../user/user'

@Component({
  selector: 'app-home',
  imports: [ RouterLink, User],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName = 'annu'

  onUserchange(user:string){
    this.userName = user
  }

  users:undefined|string[]

  handleUsers( users:string[]){
    this.users = users
    console.log(users)
  }
}
