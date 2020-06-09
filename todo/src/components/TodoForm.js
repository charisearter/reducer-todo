import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducer/reducer';
import '../components/Todo.css'

const TodoForm = () => {
  //set initial state of tasks
  const [ task, setTask ] = useState('');

  //set state and dispatch for use Reducer along with reducerfunction name and initial state
  const [ state, dispatch]  = useReducer(todoReducer, initialState);
  
  //handle input changes
  const onInputChange = e => setTask(e.target.value);

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
       //dispatch action SUBMIT with payload of task
       //adds to list
       onClick={() => dispatch({ type: 'SUBMIT', payload: task })}
       >
         Add a Task
       </button>
      </p> 
     <p>
       <button id='clear' 
       //dispatch action of clear with payload of task
       //clears all the ones marked complete
       onClick={() => dispatch({  type: 'CLEAR', payload: task })}>
         Clear Completed Tasks
       </button>
     </p>
     <h2> Tasks to do: </h2>
     {/* map over state to display list */}
     <div className='list'> 
       {state.map( that => {
         return (
           <div key={that.id}  
           //if task is completed siwtch className to itemComplete if not leave it at item
           className={that.completed ? 'itemCompleted' : 'item'}
           //dispatch function of COMPLETE with payload that.id
           //toggles to complete when clicked
           onClick={ () => dispatch({ type: 'COMPLETE', payload: that.id })}>
             {/* //display the tasks */}
            <p> {that.task } </p>
           </div>
         )
       })}
       

     </div>
     
   </div>
  )
};

export default TodoForm;