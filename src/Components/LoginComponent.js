import { useState } from "react"
import { backendURL} from "../Globals.js"
import { json } from "react-router-dom";

let LoginComponent = () => {
    let [email,setemail]=useState("");
    let [password,setpwd]=useState("");
    let [message,setmessage]=useState("");

    let changeEmail = (e) =>{
        setemail(e.currentTarget.value)
    }

    let changePwd = (e) =>{
        setpwd(e.currentTarget.value)
    }

    let clickLogin = async () => {

        let response= await fetch(backendURL+"/users/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if (response.ok){
            let jsonData = await response.json();
            setmessage("User Logged")
        }else{
            setmessage("User Not Found")
        }
    }

    return (
        <div>
            <h2>Login user</h2>
            { message != "" && <h3 className="errorMessage"> {message} </h3> }
            <div className="center-box">
                <div className="from-group">
                    <input type="text" placeholder="your email" onChange={changeEmail} />
                </div>
                <div className="from-group">
                    <input type="text" placeholder="your password" onChange={changePwd}/>
                </div>
                <button onClick={clickLogin}>Login</button>
            </div>
        </div>
    )
}

export default LoginComponent