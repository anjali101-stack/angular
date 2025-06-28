import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string | null = ''
  age:string|null = ""
  constructor (private route: ActivatedRoute) {}

  ngOnInit (): void {
    this.username = this.route.snapshot.paramMap.get('name')
    this.age = this.route.snapshot.paramMap.get('age')
    console.log(this.username)
  }
}
