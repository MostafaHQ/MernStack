import React, {useState} from 'react'

const ColorAdding = (props) => {
    const [color, setColor] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        props.newColor(color);
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Color</label>
        <input type="text" onChange={e => setColor(e.target.value)}/>
        <input type="submit" value="Add" />
    </form>
    </div>
  )
}

export default ColorAdding;
