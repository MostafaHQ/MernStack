import React, {useState} from "react";

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname,lastname, email, password, confPassword};
    };

    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e)=>setFirstname(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e)=>setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confrim Password:</label>
                <input type="password" onChange={(e)=>setConfPassword(e.target.value)} />
            </div>
        </form>

        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confPassword}</p>
        </>
    );
};

export default Form;
