import React from 'react';
import TodoForm from './components/TodoForm';

import './components/Todo.css';

const App = () => {
  
    return (  
      <div className='container'>
        <h2>ToDo List</h2>  
        <TodoForm />
      </div>
    )
  
}

export default App;
