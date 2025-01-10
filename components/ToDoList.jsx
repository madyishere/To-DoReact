import {useState} from 'react';
import ToDoItem from './ToDoItem.jsx';
function ToDoList()
{
    const [listItems, setListItems] = useState([]);
    const [task, setTask] = useState('');
    function handleTasks()
    {
        if (task.trim() === '') return;
        setListItems([...listItems,task]);
        setTask('');
    }

    function handleEdit(task)
    {
        if(task.includes('✔')) {
            alert('You cannot edit a completed task');
            return;
        }
        setTask(task);
        setListItems(listItems.filter((item) => {
            return item === task ? false : true;
        }))
    }
    
    function handleDelete(task)
    {
        setListItems(listItems.filter((item) =>{
            return item === task ? false : true;
        }))
    }

    function handleComplete(task)
    {
        if(task.includes('✔'))
            {
                alert('Task already completed');
                return;
            };
        setListItems(listItems.map((item) => {
            return item === task ? item + ' ✔' : item;
        }))
    }
    return(
        <>
              <input type="text" className='inputField' value={task} placeholder="Add a task" onChange={(e) => setTask(e.target.value)} />
              <button className='addBtn' onClick={handleTasks}>add</button>
              <ul>
                    {listItems.map((task) => {
                        return(
                            <div className='taskContainer'>
                                <ToDoItem data={task}/> 
                                <button className='deleteBtn' onClick={() => handleDelete(task)}>delete</button>
                                <button className='editbtn' onClick={() => handleEdit(task)}>edit</button>
                                <button className='completeBtn' onClick={() => handleComplete(task)}>complete</button>
                            </div>
                        )   
                    })}
              </ul>
        </>
    )
}

export default ToDoList;