import { useSelector } from "react-redux";
import Todos from "./Todos";
import { RootState } from "../redux/Store";
import { TodoType } from "../types/Types";


function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo );
  return (
    <div className="div-dod" >
      {todos &&
        todos.map((todo: TodoType) => (
        <Todos key={todo.id} todoProps={todo} />
        ))}
    </div>
  );
}

export default TodoList;
