import { Component } from '@angular/core';
import { User } from '../_models/user.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    { username: 'roberto.mireles', name: 'Roberto Mireles'},
    { username: 'roberto.mireles', name: 'Roberto Mireles'},
  ];

  displayedColumns: string[] = [
    'username',
    'name',
    'actions',
  ];

  addButtonClicked() {
    alert('Boton de adicion activado.')
  }
  deleteButtonClicked() {
    alert('Boton de borrar activado.')
  }
}
