
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../App.css"
import { useState } from "react";

function TodoCreate() {
  const [theme, setTheme] = useState<boolean>(false);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
     root.style.backgroundColor = "#fff";
     root.style.color = "black";
    }
    setTheme(!theme);
  }
  return (
    <div>
        <center className="todo-create" >
        <h1>TODO LIST</h1>
      <form className="form-todo" action="">
        <input  type="taxt" id="MyInput" placeholder="Search note..." />
        <select className="select-todo" name="name" id="name">
          <option className="option-todo" value="All">All</option>
          <option className="option-todo" value="Complete">Complete</option>
          <option className="option-todo" value="Incomplete">Incomplete</option>
        </select>
         {theme ? <MdDarkMode className="icons-todo"  onClick={changeTheme} /> :   <MdLightMode className="icons-todo" onClick={changeTheme} />}
      </form>
        </center>
       <svg  />
    </div>
  );
}

export default TodoCreate;
