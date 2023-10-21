import { todos } from "../../../Data/todos";
export default function handler(req, res) {
  const { todoId } = req.query;
  if (req.method === "DELETE") {
    const index = todos.findIndex((todo) => todo.id === parseInt(todoId));
    todos.splice(index, 1);
    todos.sort((a, b) => {
      return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
    });
    return res.status(200).json({ message: "todo delet is successful", todos });
  }
}
