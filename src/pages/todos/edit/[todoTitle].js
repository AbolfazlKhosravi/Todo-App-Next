import axios from "axios";
import { FaTrash, FaCheckSquare, FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/router";
import { getOneTodo } from "@api/todos/[todoId]";
import { useEffect, useRef, useState } from "react";
import Layout from "@containers/layout";
import dbConnect from "@server/utils/dbConnect";

const TodoPage = ({ todo }) => {
  const router = useRouter();
  const inputRef = useRef();
  console.log(router.query);

  const [formData, setFormData] = useState(todo);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const checkHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: !formData.isCompleted });
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    axios
      .put(`../../api/todos/${router.query._id}`, { formData })
      .then(({ data }) => {
        console.log(data);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <div className="  w-full flex    justify-between items-center  p-8  ">
        <div className="w-full flex   rounded-lg  justify-between items-center ring-1 p-2 ring-blue-400 px-4">
          <form
            onSubmit={submitHanlder}
            className={` h-auto w-full flex flex-col justify-start items-center px-2 transition-all ease-in-out duration-700 `}
          >
            <div className="w-full ">
              <label
                htmlFor="todo-title"
                className={`cursor-pointer text-blue-500 mb-1 block font-medium`}
              >
                Title
              </label>
              <input
                onChange={changeHandler}
                id="todo-title"
                value={formData.title}
                name="title"
                type="text"
                className="form-input text-sm font-medium transition duration-500 ease-out text-slate-600 w-full h-10 rounded-lg border border-slate-600  focus:border-none focus:outline-none"
                placeholder="Todo Tiltle ..."
                ref={inputRef}
              />
            </div>
            <div className="w-full mb-4 mt-3 ">
              <label
                htmlFor="todo-description"
                className="cursor-pointer text-blue-500 mb-1 block font-medium"
              >
                Description
              </label>
              <textarea
                onChange={changeHandler}
                id="todo-description"
                value={formData.description}
                type="text"
                name="description"
                className="form-textarea  text-sm font-medium transition duration-500 ease-out text-slate-600 w-full rounded-lg border border-slate-600  focus:border-none focus:outline-none h-32"
                placeholder="Todo Description ..."
              />
            </div>
            <div className="w-full mb-8 mt-3 flex items-center justify-start">
              <label
                htmlFor="todo-isCompleted"
                className="cursor-pointer text-blue-500  block font-medium mr-4 "
              >
                Complete Todo
              </label>
              <input
                onChange={checkHandler}
                id="todo-isCompleted"
                value={formData.isCompleted}
                type="checkbox"
                checked={formData.isCompleted}
                name="isCompleted"
                className="cursor-pointer form-input transition duration-500 ease-out text-blue-500  rounded-md border border-blue-600  focus:border-none focus:outline-none "
              />
            </div>
            <div className="w-full flex items-center justify-start gap-x-8 ">
              <button
                className="transition duration-300 ease-out hover:scale-105 bg-white border border-blue-500 font-normal rounded-xl w-28 h-9 flex items-center justify-center"
                onClick={() => router.push("/")}
                type="button"
              >
                <span className="text-blue-500 text-[1.1rem] -translate-y-[.1rem]">
                  Cansel
                </span>
              </button>
              <button
                type="submit"
                className="transition duration-300 ease-out hover:scale-105 bg-blue-500 border border-blue-500 font-normal rounded-xl w-28 h-9 flex items-center justify-center"
              >
                <span className="text-white text-[1.1rem] -translate-y-[.1rem]">
                  Update
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  dbConnect();
  const { _id } = context.query;
  const todo = await getOneTodo(_id);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

export default TodoPage;
