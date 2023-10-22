import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/todos/todoList";
import TodoForm from "../components/todos/todoForm";
import Todo from "../server/models/todo";
import Layout from "../containers/layout";

export default function Home({ data }) {
  const [todos, setTodos] = useState(data);

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
  const completTodoHandler = (id) => {
    axios
      .put(`../../api/todos/complete/${id}`)
      .then(({ data }) => {
        setTodos(data.todos);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row  w-full items-center lg:items-start lg:mt-8 justify-between ">
        <TodoForm addTodoHandler={addTodoHandler} />
        <div className="w-full px-3">
          {todos.length ? (
            todos.map((todo) => {
              return (
                <TodoList
                  key={todo._id}
                  todo={todo}
                  deletTodoHandler={deletTodoHandler}
                  completTodoHandler={completTodoHandler}
                />
              );
            })
          ) : (
            <div className="w-full px-3 flex items-center justify-center font-bold text-blue-500 text-lg">
              Emty
            </div>
          )}
        </div>
      </div>
    </Layout>
  );دح
}

export async function getServerSideProps() {
  const todos = await Todo.find({});
  todos.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
  });
  return {
    props: {
      data: JSON.parse(JSON.stringify(todos)),
    },
  };
}
