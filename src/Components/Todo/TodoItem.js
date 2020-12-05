import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "Line-Through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div>
        <div style={this.getStyle()}>
          <p>
            <input
              type="checkbox"
              checked={completed}
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {title}
            <button
              className="w-2 justify-center gap-3 rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={this.props.delTodo.bind(this, id)}
            > x
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
