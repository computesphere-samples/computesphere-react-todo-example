import { createContext, useEffect, useState } from "react";
import { Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

interface TodoContextInterface {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (id: string) => void;
  addTodo: (title: string) => void;
}

export const TodoContext = createContext<TodoContextInterface | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const trimmedTitlte = title.trim();
    const newTodo = {
      id: uuidv4(),
      title: trimmedTitlte,
    };
    const orderTodos = [newTodo, ...todos];
    setTodos(orderTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoContextValue = { todos, setTodos, addTodo, deleteTodo };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
