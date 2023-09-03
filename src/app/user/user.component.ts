import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: { name: string; age: number; isEditing: boolean }[] = [
    { name: 'Mohammad', age: 30, isEditing: false },
    { name: 'Saeed', age: 20, isEditing: false },
    { name: 'Yousef', age: 25, isEditing: false },
    { name: 'Ahmad', age: 45, isEditing: false },
  ];

  newUser: { name: string; age: number } = {
    name: '',
    age: 0,
  };

  addUser() {
    if (this.newUser.name.trim() !== '' && this.newUser.age > 0) {
      this.users.push({ ...this.newUser, isEditing: false });
      this.clearForm();
    }
  }

  editUser(index: number) {
    // Set the row to edit mode
    this.users[index].isEditing = true;
  }

  saveUser(index: number) {
    // Save the changes and exit edit mode
    this.users[index].isEditing = false;
  }

  deleteUser(index: number) {
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);
    }
  }

  clearForm() {
    this.newUser.name = '';
    this.newUser.age = 0;
  }
}