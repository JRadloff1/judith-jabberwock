import React from "react";
import ToDos from "../Components/Todo/Todos";

export class ToDoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Create React website",
        completed: true,
      },
      {
        id: 2,
        title: "Create .Net Core API for Dnd Character app",
        completed: false,
      },
      {
        id: 3,
        title: "Make a react app to access the api",
        completed: false,
      },
    ],
  };

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
      this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)]
      })
  };

  render() {
    return (
      <ToDos
        todos={this.state.todos}
        markComplete={this.markComplete.bind(this)}
        delTodo={this.delTodo}
      />
    );
  }
}

export default ToDoList;
