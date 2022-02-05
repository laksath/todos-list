import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("On del ", todo.title);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    let sno = todos.length == 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <Header title="Todo-List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
