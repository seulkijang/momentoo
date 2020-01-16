import React, { Component } from "react";
import TodoItems from "./TodoItems";
import uuid from "uuid";

class TodoContainer extends Component {
  state = {
    isOpen: false,
    todos: [],
    value: ""
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  ul = React.createRef();

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      id: uuid(),
      todo: this.state.value,
      done: false
    };
    const todos = this.state.todos.concat(data);
    await this.setState({
      todos,
      value: ""
    });
    this.localStorageSave(todos);
    this.ul.current.scrollTop = this.ul.current.scrollHeight;
  };

  checkDone = id => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    this.setState({
      todos
    });
    this.localStorageSave(todos);
  };

  handleRemove = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
    this.localStorageSave(todos);
  };

  localStorageSave = todos => {
    localStorage.setItem("MOMENTOO_TODO", JSON.stringify(todos));
  };

  getTodos = () => {
    const todos = localStorage.getItem("MOMENTOO_TODO");
    const parsedToDos = JSON.parse(todos);
    if (todos !== null) {
      this.setState({
        todos: parsedToDos
      });
    }
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const { isOpen, value, todos } = this.state;
    return (
      <TodoItems
        isOpen={isOpen}
        value={value}
        todos={todos}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        checkDone={this.checkDone}
        handleRemove={this.handleRemove}
        ul={this.ul}
      />
    );
  }
}

export default TodoContainer;
