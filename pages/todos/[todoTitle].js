import axios from "axios";
import { FaTrash, FaCheckSquare, FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/router";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  const router = useRouter();
  return (
    <div className="bg-white  w-full flex   rounded-lg  mt-2 justify-between items-center ring-1 p-2 ring-blue-400 ">
      <div className="flex flex-col items-start justify-start">
        <p className={`text-gray-600 font-bold text-lg `}> {todo.title}</p>
        <p className={`text-gray-600 font-normal  text-sm`}>
          {todo.description}/
          <span className="text-blue-500">
            {new Date(todo.date).toLocaleDateString("en-IR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-blue-500 text-lg">
          <FaCheckSquare />
        </button>
        <button className="text-green-500 ml-3 text-lg">
          <FaRegEdit />
        </button>
        <button
          onClick={() =>
            axios
              .delete(`../api/todos/${todo._id}`)
              .then(() => {
                router.push("/");
              })
              .catch((err) => console.log(err))
          }
          className="text-red-500 ml-3 text-[1rem]"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const todo = await getOneTodo(_id)
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

export default TodoPage;
