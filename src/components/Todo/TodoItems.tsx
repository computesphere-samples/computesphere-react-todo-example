import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";
import EmptyState from "../common/EmptyState";

const TodoItems = () => {
  const { todos } = useTodos();
  if (todos.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className='overflow-y-scroll md:h-64'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoItems;
