
import { MdDeleteOutline, MdFactCheck } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo, updateTodos } from '../redux/TodoSlice';
import { useState } from 'react';

interface TodoProps{
    todoProps: TodoType
}

function Todos({ todoProps }: TodoProps) {
    const {id, content, completed} = todoProps;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState<boolean>(false);
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState(content);
    
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
    const handleCheckboxChange = (id: number)=>{
        const payload: TodoType ={
            id: id,
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/> : <span style={{textDecoration: checkbox ? "line-through" : "none"}} > {content}  </span>
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
