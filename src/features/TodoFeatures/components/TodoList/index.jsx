import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss'

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoList: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoList: null,
}


function TodoList({todoList, onTodoList}) {
  const handleTodoList = (todo, idx) => {
    if(!onTodoList) return;
    onTodoList(todo, idx);
  }
  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => (
        <li 
          key={todo.id}
          className={classNames({
            'todo-item': true,
            completed: todo.status === 'completed',
          })}
          onClick={() => handleTodoList(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;