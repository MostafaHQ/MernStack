import React, {useState} from "react";

const Tabs = (props) => {
const [content, setContent] = useState("")
    const onClickHandler = (e, value) => {
        e.preventDefault();
    }
    return(
        <div>
        {props.tabs.map (item => 
        <button onClick={ e => {onClickHandler(e, item); setContent(item.content)}}>{ item.title }</button>)}
        <p>{content}</p>
        </div>
        )
}



export default Tabs;