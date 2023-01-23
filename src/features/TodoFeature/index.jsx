import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

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
  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);

  const [filterValue, setFilterValue] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all'
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterValue(params.status || 'all')
  },[location.search])

  const toggleCompleted = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new'? 'completed' : 'new',
    }
    setTodoList(newTodoList);
  };
  const filterAll = () => {navigate('?status=all')}
  const filterNew = () => {navigate('?status=new')}
  const filterCompleted = () => {navigate('?status=completed')}
  const renderTodoList = useMemo(() => {
    return todoList.filter(todo => filterValue === 'all'|| filterValue === todo.status)
  },[todoList, filterValue])


  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={renderTodoList} transToggleCompleted={toggleCompleted}/>
      <button onClick={filterAll}>Show all</button>
      <button onClick={filterNew}>Show new</button>
      <button onClick={filterCompleted}>Show completed</button>
    </div>
  );
}

export default TodoFeature;