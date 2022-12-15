import React, {useState} from 'react'

const AddTask = (props) => {
    const [task,setTask] = useState({})
    const addTask = (e)=>{
        setTask({
            text:e.target.value,
            completed:false,
            })}
    const taskToApp =(e)=>{
        e.preventDefault();
        props.submitTask(task);
    }
return (
    <div>
        <form onSubmit={taskToApp}>
            <input type="text" onChange={addTask}/>
            <button type='submit'>Add</button>
        </form>
    </div>
)
}

export default AddTask