import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pm-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})


export class GroceryComponent {
  task!: string;
  tasks: string[] = [];
  isChecked: boolean = false;

  constructor() {
    //this.tasks = { name: [] };
  }

  onClick(item: string) {
    //this.tasks.name.push(this.task);
    if (item !== ''){
      this.tasks.push(item);
    }
    console.log(this.task);
    this.task = '';
    console.log(this.tasks);
  }
  onDelete(index: number) {
    this.tasks.splice(index, 1);
    console.log(this.tasks);
  }
  
}