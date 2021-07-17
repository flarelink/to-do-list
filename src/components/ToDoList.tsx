import React from "react";
import { Card } from "react-bootstrap";
import ToDoListItem from "./ToDoListItem";

interface ToDoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
  // map each todo item in the ToDoList
  return (
    <div>
      {todos.map((todo, index) => (
        <Card key={index}>
          <Card.Body>
            <ToDoListItem todo={todo} toggleTodo={toggleTodo} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ToDoList;
