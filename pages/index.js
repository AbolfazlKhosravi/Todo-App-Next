import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/todos/todoList";
import TodoForm from "../components/todos/todoForm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [todos, setTodos] = useState(true);

  useEffect(() => {
    axios
      .get("api/todos")
      .then(({ data }) => {
        setLoading(false);
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletTodoHandler = (id) => {
    axios
      .delete(`api/todos/${id}`)
      .then(({ data }) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = (e, formData, setFormData) => {
    e.preventDefault();
    if (formData.title === "" && formData.description === "") {
      alert("writing to form");
      return;
    }
    axios
      .post("api/todos", { formData })
      .then(({ data }) => {
        setTodos(data.todos);
        setFormData({ title: "", description: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col items-center justify-start ">
      <header className="flex justify-center items-center w-full my-4 ">
        <h1 className="font-bold text-slate-600 text-3xl  ">To Do List App</h1>
      </header>
      <div className="flex flex-col lg:flex-row  w-full items-center lg:items-start lg:mt-8 justify-between ">
        <TodoForm addTodoHandler={addTodoHandler} />
        {loading ? (
          <div className="w-full px-3 flex items-center justify-center">
            loading...
          </div>
        ) : (
          <div className="w-full px-3">
            {todos.length ? (
              todos.map((todo) => {
                return (
                  <TodoList
                    key={todo.id}
                    todo={todo}
                    deletTodoHandler={deletTodoHandler}
                  />
                );
              })
            ) : (
              <div className="w-full px-3 flex items-center justify-center font-bold text-blue-500 text-lg">
                Emty
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
