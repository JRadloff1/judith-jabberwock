import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class ToDos extends Component {
  
  render() {
    return this.props.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} 
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo} />
      );
    });
  }
}

export default ToDos;
