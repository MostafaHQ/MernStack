import React from 'react'

const MyNumber = (props) => {
  return (
    <div>
        {isNaN(props.num)? 
        <h1>The word is: {props.num}</h1> :
        <h1>The number is: {props.num}</h1>}
    </div>
  )
}

export default MyNumber