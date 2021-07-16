import React, { FormEvent, useState } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddToDoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  // set to target value when change occurs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  // add todo note when submitting
  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add todo
      </button>
    </form>
  );
};
