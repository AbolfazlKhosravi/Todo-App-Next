import Todo from "../../../../server/models/todo";
import dbConnect from "../../../../server/utils/dbConnect";

dbConnect();
const todoSort = (todos) => {
  todos.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
  });
};

export default async function handler(req, res) {
  const { todoId } = req.query;
  if (req.method === "PUT") {
    const todo = await Todo.findById(todoId);
    todo.isCompleted = ! todo.isCompleted;
    todo.date = new Date().toISOString();
    await todo.save();
    const todos=await Todo.find({})
    todoSort(todos)
    return res.status(200).json({ message: "Completed", todos ,todo });
  }
}