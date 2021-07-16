import React from "react";
import ToDoListItem from "./ToDoListItem";

interface ToDoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
  // map each todo item in the ToDoList
  return (
    <ul>
      {todos.map((todo) => {
        return <ToDoListItem todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};

export default ToDoList;
