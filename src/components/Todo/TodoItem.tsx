import { Trash2 } from "lucide-react";
import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../types";
import { toast } from "sonner";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { deleteTodo } = useTodos();
  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.success("Todo completed successfully!");
  };
  return (
    <div className='bg-white p-4 rounded-md mb-4 shadow-sm flex-between transition-all duration-300 hover:shadow-md'>
      <p className='text-lg text-dark-gray'>{todo.title}</p>
      <button
        title='Delete Todo'
        aria-label='Delete Todo'
        className='ml-4 p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:bg-gray-100'
        onClick={handleDelete}
      >
        <Trash2 className='w-5 h-5 text-red-600' />
      </button>
    </div>
  );
};

export default TodoItem;
