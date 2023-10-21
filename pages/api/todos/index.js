import { todos } from "../../../Data/todos";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newTodo = {
      id: Date.now(),
      title: req.body.formData.title,
      description: req.body.formData.description,
      date: new Date().toISOString(),
    };
    todos.push(newTodo);
    todos.sort((a, b) => {
      return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
    });
    return res.status(201).json({ todos, message: "add post is sussecfuly" });
  }
  todos.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
  });
  return res.status(200).json({ todos });
}
