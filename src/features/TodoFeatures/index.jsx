import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ]
  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoList = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new'? 'completed': 'new'
    }
    setTodoList(newTodoList)
  }
  return (
    <div>
      <TodoList todoList={todoList} onTodoList={handleTodoList}/>
    </div>
  );
}

export default TodoFeature;