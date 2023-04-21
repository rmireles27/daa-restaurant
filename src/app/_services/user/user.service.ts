import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { username: 'roberto.mireles', name: 'Roberto Mireles'},
    { username: 'roberto.mireles', name: 'Roberto Mireles'},
  ];
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser() {
    alert('Boton de borrar activado.')
  }
}
