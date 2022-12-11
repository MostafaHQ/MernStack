import React, {useState} from "react";

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstname = (e)=>{
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setFirstnameError("First Name must be at least 2 characters.")
        }else {
            console.log("hiiii")
            setFirstnameError("");
        }
    }

    const handleLastname = (e)=>{
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLastnameError("Last Name must be at least 2 characters.")
        }else {
            setLastnameError("");
        }
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters.")
        }else {
            setEmailError("");
        }
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters.")
        }else {
            setPassword("");
        }
    }

    const handleConfirmPassword = (e)=>{
        setConfPassword(e.target.value);
        if(e.target.value.length != {password}){
            setConfPasswordError("Confirm Password must be same as Password")
        }else {
            setConfPassword("");
        }
    }
    const createUser = (e)=> {
        e.preventDefault();
        setHasBeenSubmitted(true);
    }

    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={handleFirstname} />
                {
                    firstnameError ?
                    <p>{firstnameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={handleLastname} />
                {
                    lastnameError ?
                    <p>{lastnameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={handlePassword} />
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Confrim Password:</label>
                <input type="password" onChange={handleConfirmPassword} />
            </div>
            <div>
                <input type="submit" value= "Create user"/>
            </div>
        </form>
        {
                    hasBeenSubmitted ?
                    <p> <p>First Name: {firstname}</p>
                    <p>Last Name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confPassword}</p>
                    </p> :
                    ""
                }
       
        </>
    );
        }

export default Form;
