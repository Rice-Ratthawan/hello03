import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {


  users = []; //Empty Array
  firstName = [''];
  lastName = [''];
  show = true; //show: boolean = true->show, false->not show
  selected = 0;

  ngOnInit(): void {

  }

  saveData(): void {

    //String concat-> this.name=this.firstName+' '+this.lastName; 
    const fullName = `${this.firstName} ${this.lastName}`; //String template
    //Append to list/array
    this.users.push({ name: fullName, status: false });
  }

  doToggle(index: number) {
    this.users[index].status = !this.users[index].status;
    this.selected = this.users.filter((u) => u.status).length;
  }

}
