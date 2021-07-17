import React from "react";
import { Button } from "react-bootstrap";
import "../styles/ToDoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const ToDoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div className="todo">
      <label className={todo.complete ? "complete" : undefined}>
        {todo.note}
      </label>

      <div>
        {/* // button to toggle strike through of todo's note */}
        <Button variant="success" onClick={() => toggleTodo(todo)}>
          Completed
        </Button>

        {/* // button to remove a todo */}
        <Button variant="danger" onClick={() => removeTodo(todo)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ToDoListItem;
