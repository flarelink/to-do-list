// Setting file to a declaration type to allow common interfaces
// to be easily shared to other files in the project
interface Todo {
  note: string;
  date?: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
