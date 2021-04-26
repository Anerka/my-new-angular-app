import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newUserName: string = ''
  users = [
    {
        id: "1",
        name: 'Jack',
        age: 21
    },
    {
        id: "2",
        name: 'James',
        age: 22
    },
    {
        id: "3",
        name: 'Johan',
        age: 23
    }
  ]

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  console.log('removeUser', id) 
  }

  addUser(name: string) : void {
    if(this.newUserName != '')
    {
        var uniqueId = 0
        if(this.users.length > 0)
            uniqueId = Math.max.apply(Math, this.users.map(function(o) { return +o.id; })) + 1
            //uniqueId = 10
        else
            uniqueId = 1

    const newUser = {
        id: uniqueId.toString(),
        name,
        age: 30
    }
    this.users.push(newUser)
    console.log('addUser ')
    }
}

}