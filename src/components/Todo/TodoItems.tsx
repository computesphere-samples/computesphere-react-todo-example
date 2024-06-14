import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";
import EmptyState from "../common/EmptyState";

const TodoItems = () => {
  const { todos } = useTodos();
  if (todos.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className='overflow-y-auto max-h-[30vh] sm:max-h-[40vh] lg:max-h-60'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoItems;
