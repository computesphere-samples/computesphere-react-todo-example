import TodoForm from "../Todo/TodoForm";
import TodoItems from "../Todo/TodoItems";
import Heading from "../common/Heading";

const TodoContainer = () => {
  return (
    <div className='container my-10'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <Heading title='React Todo Example Application' />
        <TodoForm />
        <TodoItems />
      </div>
    </div>
  );
};

export default TodoContainer;
