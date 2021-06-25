import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (idx) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(idx, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickConplete = (idx) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(idx, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[idx]];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (idx) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(idx, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[idx]];
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onClickAdd={onClickAdd}
        onChangeTodoText={onChangeTodoText}
      />

      <IncompleteTodos
        Todos={incompleteTodos}
        onClickConplete={onClickConplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;
