import React from "react";
import "../styles/ToDoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const ToDoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="todo">
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.note}
      </label>
    </div>
  );
};

export default ToDoListItem;
