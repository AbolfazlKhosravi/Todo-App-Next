import Todo from "../../../server/models/todo";
import dbConnect from "../../../server/utils/dbConnect";

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
    return res.status(200).json({ message: "todo Delete is successfuly", todos });
  }
}
