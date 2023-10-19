import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/todos/todoList";
import TodoForm from "../components/todos/todoForm";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
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
      .then(({ data  }) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("writing to form");
      return;
    }
    axios
      .post("api/todos", {  title: value })
      .then(({data}) => {
        setTodos(data.todos);
        setValue("");
      })
      .catch((err) => console.log(err));
   
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-start ">
      <header className="flex flex-col items-center my-4 md:my-6">
        <h1 className="font-bold text-white text-2xl mb-2 md:text-3xl">
          To Do List App Using Next & Api Routes & Tailwind Css
        </h1>
      </header>
      <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-lg">
        <TodoForm addTodoHandler={addTodoHandler} value={value} setValue={setValue}/>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {todos.map((todo) => {
              return (<TodoList key={todo.id} todo={todo} deletTodoHandler={deletTodoHandler}/>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
