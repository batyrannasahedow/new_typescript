import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";



function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const cancelAlert = () =>{
    setShowAlert(false)
  }

  return (
    <div className="div-mod">
      <TodoCreate />
      {showAlert && (
      <div className="select" >
      <Todo />
      <button className="cancel" onClick={cancelAlert} >CANCEL</button>
      </div>
      )}
      <div>
      <TodoList className="new-todo"/>
      </div>
      <button className="todo-a" onClick={() => setShowAlert(true)}> + </button>
    </div>
  );
}

export default App;
