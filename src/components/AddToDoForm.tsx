import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ color: "floralwhite" }}>
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
