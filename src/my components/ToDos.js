import React from 'react'
import {Todo} from './Todo'

export const ToDos = (props) => {
    let Mystyle={
        minHeight:"70vh",
        margin: "40px auto"
    };
    return (
        <div className="container" style={Mystyle}>
            <h3 className="my-3">To-Dos list</h3>
            {props.todos.length === 0 ? "No todos to display":
             props.todos.map((todo) =>{
             return (
              <>
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              <hr />
              </>
             )}
            )
            }
        </div>
    )
}
