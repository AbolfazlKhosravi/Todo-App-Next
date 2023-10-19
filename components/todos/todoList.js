import { FaTrashAlt, FaCheckSquare, FaEdit } from "react-icons/fa";

const TodoList = ({ todo ,deletTodoHandler }) => {
  return (
    <div className="bg-white w-72 flex  px-2 py-1 rounded-sm mt-2 justify-between items-center md:w-96 md:h-10">
      <p className={`text-gray-900 font-bold md:text-lg `}>{todo.title}</p>
      <div className="flex items-center justify-between">
        <button className="text-blue-700 text-lg">
          <FaCheckSquare />
        </button>
        <button className="text-green-700 ml-2 text-lg">
          <FaEdit />
        </button>
        <button
          onClick={() => deletTodoHandler(todo.id)}
          className="text-red-700 ml-2 text-[1rem]"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
