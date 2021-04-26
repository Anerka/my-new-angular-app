import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent {
    @Input() users
    @Output() removeUser = new EventEmitter()
    newUserName: string = ''

    setNewUserName(event: Event) : void {
        this.newUserName = (<HTMLInputElement>event.target).value
        console.log('setNewUserName', this.newUserName )
    }

    addUser() : void {
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
            name: this.newUserName,
            age: 30
        }
        this.users.push(newUser)
        this.newUserName = ''
        console.log('addUser ')
        }
    }
}