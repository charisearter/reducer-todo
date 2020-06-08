import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
      <input 
      id='task'
      onChange={props.onInputChange}
      name='task'
      type='text'
      paceholder='Add a task to do'
      />
     <p>
       <button id='submit' onClick={props.onSubmit}>
         Add a Task
       </button>
      </p> 
     <p>
       <button id='clear' onClick={props.onClear}>
         Clear Completed Tasks
       </button>
     </p>
    </form>
  );
};

export default TodoForm;