import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
const TodoForm = ({addTodoHandler,value,setValue}) => {
  
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-4 bg-white w-72 flex justify-between items-center px-2 py-1 rounded-sm font-bold md:w-96 md:h-10 md:text-sm"
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full focus:outline-none"
        placeholder="add somthing"
        ref={inputRef}
      />
      <button className="text-green-900" type="submit">
        <FaPlusCircle className="text-lg fa-sharp fa-solid fa-circle-plus" />
      </button>
    </form>
  );
};

export default TodoForm;
