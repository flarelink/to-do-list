import React from "react";
import "../ToDoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const ToDoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="ToDoListItem">
      <li>
        <label className={todo.complete ? "complete" : undefined}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.note}
        </label>
      </li>
    </div>
  );
};

export default ToDoListItem;
