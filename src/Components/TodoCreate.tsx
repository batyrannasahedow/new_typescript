
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../App.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/TodoSlice";


function TodoCreate() {
  const dispatch = useDispatch();
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
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilter(e.target.value as 'all' | 'complete' | 'incomplete'));
    };
  return (
    <div>
        <center className="todo-create" >
        <h1>TODO LIST</h1>
      <form className="form-todo" action="">
        <input  type="taxt" id="MyInput" placeholder="Search note..." />
        <select className="select-todo" onChange={handleFilterChange} >
          <option className="option-todo" value="all"  >All</option>
          <option className="option-todo" value="complete"  >Complete</option>
          <option className="option-todo" value="incomplete" >Incomplete</option>
        </select>
         {theme ? <MdDarkMode className="icons-todo"  onClick={changeTheme} /> :   <MdLightMode className="icons-todo" onClick={changeTheme} />}
      </form>
        </center>
       <svg  />
    </div>
  );
}

export default TodoCreate;
