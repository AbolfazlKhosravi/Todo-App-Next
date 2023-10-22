import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
const TodoForm = ({ addTodoHandler }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);

  const inputRef = useRef();
  useEffect(() => {
    if (isShow) {
      inputRef.current.focus();
    }
  }, [isShow]);
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="mb-4 flex flex-col w-full px-4">
      <form
        onSubmit={(e) => addTodoHandler(e, formData ,setFormData)}
       
        className={
          `${isShow
            ? "h-[19rem] overflow-auto"
            : "h-0 overflow-hidden"}  scrollbar-hide  w-full flex flex-col justify-start items-center px-2 transition-all ease-in-out duration-700 `
        }
      >
        <div className="w-full ">
          <label
            htmlFor="todo-title"
            className="cursor-pointer text-blue-500 mb-1 block font-medium"
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
            className="form-textarea form-input text-sm font-medium transition duration-500 ease-out text-slate-600 w-full rounded-lg border border-slate-600  focus:border-none focus:outline-none h-32"
            placeholder="Todo Description ..."
          />
        </div>
        <div className="w-full flex items-center justify-between ">
          <button
            className="transition duration-300 ease-out hover:scale-105 bg-white border border-blue-500 font-normal rounded-xl w-28 h-9 flex items-center justify-center"
            onClick={() => setIsShow(false)}
            type="button"
          >
            <span className="text-blue-500 text-[1.1rem] -translate-y-[.1rem]">
              Cansel
            </span>
          </button>
          <button
           type="submit"
            className="transition duration-300 ease-out hover:scale-105 bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center"
          >
            <span className="text-white text-[2.4rem] -translate-y-[.3rem] translate-x-[.2px]">
              +
            </span>
          </button>
        </div>
      </form>
      <div
        className={
          isShow
            ? "hidden"
            : " w-full flex justify-center items-center font-bold my-6"
        }
      >
        <button
          className="transition duration-300 ease-out hover:scale-105 flex items-center justify-center bg-blue-500 text-white text-[1.15rem] rounded-lg w-40 h-10 font-semibold"
          onClick={() => setIsShow(true)}
        >
          {" "}
          Add New Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
