import './App.css';
import Header from './my components/Header';
import {ToDos} from './my components/ToDos';
import {Footer} from './my components/Footer';
import { AddTodo } from './my components/AddTodo';
import React, { useEffect, useState } from 'react';
import { About } from './my components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo",todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }
  const addTodo = (title,desc) => {
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length === 0)
    {
       sno = 1;
    }
    else
    {
       sno = todos[todos.length-1].sno + 1;
    }
    const MyTodo ={
      sno:sno,
      title:title,
      desc:desc
    };
    setTodos([...todos,MyTodo]);
    console.log(MyTodo)
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="My Todo List" search={false}/>
    <Switch>
        <Route exact path="/" render={()=> {
          return (
          <>
          <AddTodo addTodo={addTodo}/>
          <ToDos todos={todos} onDelete={onDelete}/>
          </>
           )}}>
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
    </Switch>
    <Footer />
    </Router>
    </>
  );
}
export default App;
