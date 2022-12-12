import React, {useState} from 'react'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setHasBeenSubmitted(true);
        props.newMessage(msg);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Color</label>
        <textarea cols="40" rows="4" onChange={e => setMsg(e.target.value)}></textarea>
        <input type="submit" value="Add" />
    </form>
    </>
  );
}

export default MessageForm