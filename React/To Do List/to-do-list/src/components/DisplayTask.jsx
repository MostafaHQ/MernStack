import React from 'react'

const DisplayTask = (props) => {

    const checked ={
        textDecoration: "line-through"
    }
  return (
    <div>
{props.tasks.map((item,idx)=><p key={idx}><p style ={item.completed? checked:null}>{item.text}</p><input type="checkbox" onChange={e=>props.updateTask(idx)}/><button onClick={e=>props.deleteTask(idx)}>delete</button></p>)}
    </div>
  )
}

export default DisplayTask
