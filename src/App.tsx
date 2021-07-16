// import "./App.css";
import React, { useState } from "react";
import { AddToDoForm } from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";

const initTodos: Array<Todo> = [];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // for the selected todo item, toggle the complete value
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // add a todo only if it has a note in it
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { note: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <AddToDoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
