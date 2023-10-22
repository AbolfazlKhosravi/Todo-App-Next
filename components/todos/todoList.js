import Link from "next/link";
import { FaTrash, FaCheckSquare, FaRegEdit } from "react-icons/fa";

const TodoList = ({ todo, deletTodoHandler, completTodoHandler }) => {
  const descriptionLength = process.browser
    ? window.innerWidth < 480
      ? 16
      : window.innerWidth < 600
      ? 34
      : 38
    : 38;
  return (
    <div className="bg-white  w-full flex   rounded-lg  mt-2 justify-between items-center ring-1 p-2 ring-blue-400 ">
      <Link
        href={`/todos/${todo.title.trim().split(" ").join("")}?_id=${todo._id}`}
      >
        <div className="flex flex-col items-start justify-start">
          <p
            className={`${
              todo.isCompleted ? "line-through opacity-50" : ""
            } text-gray-600 font-bold text-lg `}
          >
            {" "}
            {todo.title}
          </p>
          <p
            className={`${
              todo.isCompleted ? "line-through opacity-50" : ""
            } text-gray-600 font-normal  text-sm`}
          >
            {todo.description
              .slice(0, descriptionLength)
              .concat(
                descriptionLength > todo.description.length ? "" : " ..."
              )}{" "}
            /{" "}
            <span className="text-blue-500">
              {new Date(todo.date).toLocaleDateString("en-IR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <button className="flex items-center justify-center" onClick={() => completTodoHandler(todo._id)}>
          {todo.isCompleted ? (
               <span className="flex items-center justify-center cursor-pointer  border border-blue-500 bg-blue-500 text-white w-5 h-5 rounded-full"> ✔</span>
          ) : (
            <span className="flex items-center justify-center cursor-pointer  border border-blue-500 w-5 h-5 rounded-full"></span>
          )}
        </button>
        <Link
          href={`/todos/edit/${todo.title.trim().split(" ").join("")}?_id=${
            todo._id
          }`}
          className="text-green-500 ml-3 text-lg"
        >
          <FaRegEdit />
        </Link>
        <button
          onClick={() => deletTodoHandler(todo._id)}
          className="text-red-500 ml-3 text-[1rem]"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
