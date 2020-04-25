import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = []
  addTodo(value):any{    
    this.todoArray.push(value)    
    console.log(this.todoArray)  
  }

  deleteItem(todo):any{
    console.log("delete item")
    for(let i=0 ;i<= this.todoArray.length ;i++) {
      if(todo == this.todoArray[i]) {     
        this.todoArray.splice(i,1)    
      }   
    }
  }
}
