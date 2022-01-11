import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from "uuid";

class TodosList extends React.PureComponent {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

render() {
  return (
    <ul>
      {this.state.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
        />
      ))}
    </ul>
  );
}
}

export default TodosList;
