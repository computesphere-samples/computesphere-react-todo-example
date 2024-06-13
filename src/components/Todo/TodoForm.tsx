import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { toast } from "sonner";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodos();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
    toast.success("New todo added successfully!");
  };
  return (
    <form className='mb-6' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Add a new todo...'
          className='border border-secondary p-2 w-full rounded-md focus:outline-none'
          value={todoText}
          onChange={handleChange}
          required
        />
        <button
          type='submit'
          className='bg-dark-blue hover:bg-white text-white hover:text-dark-gray p-2 border border-transparent hover:border-dark-gray rounded-md w-full transition-colors'
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
