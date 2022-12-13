import React from 'react';


const ColorDisplay = (props) => {
  return (
    <div>
      {props.boxColor.map(item=> <div style={{backgroundColor: item ,height:'150px',width:'150px', display: 'inline-block',margin :"15px"}}></div> )}
    </div>
  )
}

export default ColorDisplay;
