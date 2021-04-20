import { Component } from "@angular/core";

@Component({
    selector:'app-users-list',
    templateUrl: './usersList.component.html',
})

export class UsersListComponent {
    users = [
        {
            id: '1',
            name: 'Jack',
            age: 21
        },
        {
            id: '2',
            name: 'James',
            age: 22
        },
        {
            id: '3',
            name: 'Johan',
            age: 23
        }
    ]

    removeUser(id: string): void {
        this.users = this.users.filter(user => user.id !== id)
       console.log('removeUser', id) 
    }

    setNewUserName(userName: string) : void {
        console.log('setNewUserName', userName )
    }

    addUser() : void {
        console.log('addUser ')
    }
}