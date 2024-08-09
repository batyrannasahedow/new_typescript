import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/TodoSlice";
import "../App.css";

function Todo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  debugger;

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Todo yazmaly");
       return;
    };
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>NEW NOTE</h1>
      <input
        className="center-todo"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        type="text"
        placeholder="New todo"
      />
      <button className="todo-b" onClick={handleCreateTodo}>
        APPLY
      </button>
    </section>
  );
}

export default Todo;
