import React, { useReducer, useState } from 'react';
import TodoForm from './components/TodoForm';
import List from './components/TodoList';
import { todoReducer, initialState } from './reducer/reducer';
import './components/Todo.css';

const App = () => {

const [ task, setTask ] = useState('');

 const [ state, dispatch]  = useReducer(todoReducer, initialState);

  const onComplete = e => {
    dispatch ({ type: 'COMPLETE', payload: state.completed })
  };

  //handle Input Change

  const onInputChange = e => setTask(e.target.value);

  //on Submit for adding to list
  const onSubmit = e =>{ 
    e.preventDefault(); 
    
    dispatch ({ type: 'SUBMIT', payload: task })

    };

  


  //handle Clear Complete

  const onClear = (e) => {
     e.preventDefault(); 
     dispatch ({ type: 'CLEAR', payload: task })
    //   this.setState({ todolist: this.state.todolist.filter(item => {
    //     return !item.completed;
    //   })  
    // }); //return uncompleted items

    };
  
    return (  
      <div className='container'>
        <h2>ToDo List</h2>
        <List state={state} onComplete={onComplete} />
        <TodoForm 
        onClear={onClear} 
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        />
      </div>
    );
  
}

export default App;
