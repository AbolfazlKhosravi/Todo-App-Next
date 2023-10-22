import Todo from "@server/models/todo";
import dbConnect from "@server/utils/dbConnect";

dbConnect();

const todoSort = (todos) => {
  todos.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
  });
};

export default async function handler(req, res) {
  const { todoId } = req.query;
  if (req.method === "DELETE") {
    await Todo.findByIdAndDelete(todoId);
    const todos = await Todo.find({});
    todoSort(todos);
    return res
      .status(200)
      .json({ message: "todo Delete is successfuly", todos });
  }
  if (req.method === "GET") {
    const todo = await getOneTodo(todoId);
    return res.status(200).json({ message: "todo finded successfuly", todo });
  }
  if (req.method === "PUT") {
    const { formData } = req.body;
    const todo = await Todo.findById(todoId);
    todo.title = formData.title;
    todo.description = formData.description;
    todo.isCompleted = formData.isCompleted;
    todo.date = new Date().toISOString();
    await todo.save();
    const todos=await Todo.find({})
    return res.status(200).json({ message: "Completed", todos });
  }
}

export async function getOneTodo(todoId) {
  const todo = await Todo.findById(todoId);
  return todo;
}
