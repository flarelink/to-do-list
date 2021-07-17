import "./styles/App.css";
import React, { useState } from "react";
import { AddToDoForm } from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "floralwhite" }}>
          Todo List
        </h1>
        <React.Fragment>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
          <AddToDoForm addTodo={addTodo} />
        </React.Fragment>
      </div>
    </div>
  );
};

export default App;
