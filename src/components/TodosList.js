import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
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
