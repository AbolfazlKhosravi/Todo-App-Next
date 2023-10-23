import dbConnect from "@server/utils/dbConnect";
import Todo from "@server/models/todo";

dbConnect();

const todoSort = (todos) => {
  todos.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
  });
};
export default async function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    const { formData } = body;
    const newTodo = {
      title: formData.title,
      description: formData.description,
      date: new Date().toISOString(),
    };
    await Todo.create(newTodo);
    const todos = await Todo.find({});
    todoSort(todos);
    return res.status(201).json({ todos, message: "new Todo Added" });
  } else if (method === "GET") {
    const todos = await Todo.find({});
    if (todos.length) {
      todoSort(todos);
    }
    return res.status(200).json({ todos });
  }
}
