import React, {useState} from 'react';


const ColorDisplay = (props) => {
    // const coloring ={
    // backgroundColor :props.boxColor,
    // height : "150px",
    // width : "150px",
    // margin : "0 auto",
    // marginTop : "20px",
    // }
  return (
    <div>
      {props.boxColor.map(item=> <div style={{backgroundColor: item ,height:'150px',width:'150px', display: 'inline-block',marginTop : "20px", margin : "20px"}}></div> )}
    </div>
  )
}

export default ColorDisplay;
