import { useState } from "react"
import { backendURL} from "../Globals.js"
import { json } from "react-router-dom";

let RegisterComponent = () => {
    let [email,setemail]=useState("");
    let [name,setname]=useState("");
    let [password,setpwd]=useState("");
    let [message,setmessage]=useState("");

    let changeEmail = (e) =>{
        setemail(e.currentTarget.value)
    }

    let changeName = (e) =>{
        setname(e.currentTarget.value)
    }

    let changePwd = (e) =>{
        setpwd(e.currentTarget.value)
    }

    let clickRegister = async () => {

        let response= await fetch(backendURL+"/users",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        })

        if (response.ok){
            let jsonData = await response.json();
            setmessage("New User created")
        }else{
            setmessage("Error")
        }
    }

    return (
        <div>
            <h2>Register user</h2>
            <h3>{ message }</h3>
            <div className="center-box">
                <div className="from-group">
                    <input type="text" placeholder="your email" onChange={changeEmail} />
                </div>
                <div className="from-group">
                    <input type="text" placeholder="your name" onChange={changeName}/>
                </div>
                <div className="from-group">
                    <input type="text" placeholder="your password" onChange={changePwd}/>
                </div>
                <button onClick={clickRegister}>Register</button>
            </div>
        </div>
    )
}

export default RegisterComponent