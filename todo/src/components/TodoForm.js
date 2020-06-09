import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducer/reducer';
import '../components/Todo.css'

const TodoForm = () => {

  const [ task, setTask ] = useState('');
  const [ state, dispatch]  = useReducer(todoReducer, initialState);
  
  const onInputChange = e => setTask(e.target.value);

  // const onComplete = e => {
  //   dispatch ({ type: 'COMPLETE', payload: state.id })
  // };
  return (
    <div className='container'>
      <input 
      id='task'
      onChange={onInputChange}
      name='task'
      type='text'
      paceholder='Add a task to do'
      />
     <p>
       <button id='submit' 
       onClick={() => dispatch({ type: 'SUBMIT', payload: task })}
       >
         Add a Task
       </button>
      </p> 
     <p>
       <button id='clear' onClick={() => dispatch({  type: 'CLEAR', payload: task })}>
         Clear Completed Tasks
       </button>
     </p>
     <h2> Tasks to do: </h2>
     {/* map over state to display list */}
     <div className='list'> 
       {state.map( that => {
         return (
           <div key={that.id}  
           className={that.completed ? 'itemCompleted' : 'item'}
           onClick={ () => dispatch({ type: 'COMPLETE', payload: that.id })}>

            <p> {that.task } </p>
           </div>
         )
       })}
       

     </div>
     
   </div>
  )
};

export default TodoForm;