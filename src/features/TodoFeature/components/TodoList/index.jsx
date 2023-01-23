import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss'

TodoList.propTypes = {
  todoList: PropTypes.array,
  transToggleCompleted: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  transToggleCompleted: null,
}

function TodoList({todoList, transToggleCompleted}) {
  const toggleCompleted = (todo, idx) => {
    if (!transToggleCompleted) return;
    transToggleCompleted(todo, idx)
  }
  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => 
        <li 
          key={todo.id}
          className={classNames({
            completed: todo.status === 'completed',
          })}
          onClick={() => {toggleCompleted(todo, idx)}}
        >
          {todo.title}
        </li>
      )}
    </ul>
  );
}

export default TodoList;