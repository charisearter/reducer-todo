// import React, { useReducer } from 'react';
// import Item from '../components/Todo';

// use reducer for submit complete and clear

//initial state set up
export const initialState = [
  
    {
    task: 'Fold the blankets',
    id: 1234567890,
    completed: false,
  },
  
]

//dispatch set up
// export const dispatch = action => {
//   initialState = todoReducer(initialState, action)
// }

//reducer set up

export const todoReducer = (state, action) => {
  //set if statements here
  console.log(action)
  switch(action.type){
    case 'SUBMIT': //Add a task
      return[
        ...state,
        {
          task: action.payload,
          id: Date.now(),
          completed: false,
        }
       ]//end case SUBMIT
    case 'COMPLETE': //toggle complete or not
      
        let complete = state.map(e => {
          if (e.id === action.payload){
            return { 
              ...e,
              completed: !e.completed 
            }
          } else {
            return e;
          }
        })
        return complete
        // state.map( item => {
        //   if(item.id === action.payload){
        //     return {...item, completed: action.payload
        //     };
        //   } 
        //   return item;
       //end case COMPLETE
    case 'CLEAR': //clear completed items
    
     let clearOut = state.filter(e => {
        if (e.completed === true){
          return !e.completed;
        } else {
          return e
        }
        })
        return clearOut
    
    default: //if nothing happens
      return state;
  }//end switch

}