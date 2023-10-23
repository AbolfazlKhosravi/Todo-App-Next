import axios from "axios";
import { FaTrash, FaCheckSquare, FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/router";
import { getOneTodo } from "@api/todos/[todoId]";
import { useState } from "react";
import Link from "next/link";
import Layout from "@containers/layout";
import dbConnect from "@server/utils/dbConnect";

const TodoPage = ({ data }) => {
  const router = useRouter();
  const [todo, setTodo] = useState(data);
  return (
    <Layout>
      <div className="bg-white  w-full flex   rounded-lg  mt-2 justify-between items-center ring-1 p-2 ring-blue-400 ">
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
          <button
            className="flex items-center justify-center"
            onClick={() =>
              axios
                .put(`../../api/todos/complete/${todo._id}`)
                .then(({ data }) => {
                  setTodo(data.todo);
                  console.log(data);
                })
                .catch((err) => console.log(err))
            }
          >
            {todo.isCompleted ? (
              <span className="flex items-center justify-center cursor-pointer  border border-blue-500 bg-blue-500 text-white w-5 h-5 rounded-full">
                {" "}
                ✔
              </span>
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
    </Layout>
  );
};

export async function getServerSideProps(context) {
  dbConnect()
  const { _id } = context.query;
  const todo = await getOneTodo(_id);
  return {
    props: {
      data: JSON.parse(JSON.stringify(todo)),
    },
  };
}

export default TodoPage;
