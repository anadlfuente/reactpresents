import { useState } from "react"
import { backendURL} from "../Globals.js"
import { json } from "react-router-dom";

let CreatePresentComponent = () => {
    let [present,setpresent]=useState({})
    let [message,setmessage]=useState("");

    let changeProperty = (propertyName, e) => {
        let newPresent= {...present, [propertyName] : e.currentTarget.value}
        setpresent(newPresent)
    }


    let clickAddPresent = async () => {

        let response= await fetch(backendURL+"/presents?apiKey="+localStorage.getItem("ApiKey"),{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(present)
        })

        if (response.ok){
            let jsonData = await response.json();
            setmessage("New Present Added")
        }else{
            setmessage("Error")
        }
    }

    return (
        <div>
            <h2>Create Present</h2>
            <h3 className="errorMessage">{ message }</h3>
            <div className="center-box">
                <div className="from-group">
                    <input type="text" placeholder="Name" onChange={(e) => changeProperty("name",e)} />
                </div>
                <div className="from-group">
                    <input type="text" placeholder="Description" onChange={(e) => changeProperty("description",e)}/>
                </div>
                <div className="from-group">
                    <input type="text" placeholder="URL" onChange={(e) => changeProperty("website",e)}/>
                </div>
                <div className="from-group">
                    <input type="number" placeholder="Price" onChange={(e) => changeProperty("price",e)}/>
                </div>
                <button onClick={clickAddPresent}>Add Present</button>
            </div>
        </div>
    )
}

export default CreatePresentComponent