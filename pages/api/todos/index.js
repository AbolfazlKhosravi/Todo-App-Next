import { data } from "autoprefixer";
import { todos } from "../../../Data/Todos";
export default function handler(req, res) {
  if(req.method==="POST"){
    const newTodo={
      id:Date.now(),title:req.body.title
    }
   todos.push(newTodo)
   return  res.status(201).json({ todos ,message:"add post is sussecfuly"});
  }
   res.status(200).json({ todos });
}
