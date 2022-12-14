import React from 'react'


const StylingComp = (props) => {
  return (
    <div>
        {isNaN(props.word)? 
        <h1 style={{color:props.color1, backgroundColor:props.color2}}>The word is: {props.word}</h1> :
        <h1 style={{color:props.color1, backgroundColor:props.color2}}>The number is: {props.word}</h1>}
    </div>
  )
}

export default StylingComp