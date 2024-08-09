
import { MdDeleteOutline, MdFactCheck } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { TodoType } from '../types/Types'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoById,  toggleTodo, updateTodo, updateTodos } from '../redux/TodoSlice';
import { useState } from 'react';
import { RootState } from '../redux/Store';

interface TodoProps{
    todoProps: TodoType
}

function Todos({ todoProps }: TodoProps) {
    const {id, content, completed} = todoProps;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState<boolean>(false);
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState(content);
    const todos = useSelector((state: RootState) =>{
        if (state.todo.filter === 'all'){
            return state.todo.todos;
        } else if(state.todo.filter === 'complete'){
            return state.todo.todos.filter(todoProps => todoProps.completed);
        } else {
            return state.todo.todos.filter(todoProps => !todoProps.completed);
        }
    });

    const handleRemoveTodo = () =>{
        dispatch(removeTodoById(id))
    }
    const handleUpdateTodo = () => {
        const payload: TodoType ={
            id: id,
            content: newTodo,
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }
    const handleToggleTodo = (id: number) =>{
        dispatch(toggleTodo(id))
    }
    const handleCheckboxChange = (id: number)=>{
        const payload: TodoType ={
            id: id,
            content: newTodo,
            completed: false
        }
        dispatch(updateTodos(payload))
        setCheckbox(true)
    }
    

  return (
        <div className='form-to'>
                <div>
                <input type="checkbox" checked={completed} onChange={()=> handleCheckboxChange(id)} />
                {
                    editable ? <input type="text" style={{width: "400px", fontSize: "20px", border: "none", borderBottom: "1px solid black", outline: "none"}}
                   value={newTodo} 
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/> :
                   todos &&  <span key={todoProps.id} onClick={() => handleToggleTodo(todoProps.id)} style={{textDecoration: checkbox ? "line-through" : "none"}} > {todoProps.content}  </span>
                }
                </div>
                <div>
                    {
                        editable ? <MdFactCheck onClick={handleUpdateTodo} /> : <CiEdit className='ciedit' onClick={() =>setEditable(true)} />
                    }
                <MdDeleteOutline className='delete' onClick={handleRemoveTodo} />
                </div>
        </div> 
  )
}

export default Todos
