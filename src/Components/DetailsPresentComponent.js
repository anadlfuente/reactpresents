import { useEffect, useState } from "react"
import { backendURL } from "../Globals"
import { useParams } from "react-router-dom"

let DetailsPresentComponent = ()=> {
    
    let [present,setPresent] = useState({})
    let [message,setMessage] = useState("")
    let { presentId } = useParams();

    useEffect(()=>{
        getPresent();
    },[])

    let getPresent = async () =>{
        let response= await fetch(backendURL+"/presents/"+presentId+"?apiKey="+localStorage.getItem("ApiKey"))
        if (response.ok){
            let jsonData= await response.json()
            setPresent(jsonData)
        }else{
            setMessage("Error loading present details")
        }
    }
    return(
        <div>
            <h2>Present Details</h2>
            { message != "" && <h3 className="errorMessage">{message}</h3>}
            <div class= "present-list">
                    <div className="present">
                        <h3>{present.present}</h3>
                        <p>{present.description}</p>
                        <p>{present.url}</p>
                        <p>{present.price}</p>
                        <p>{present.ChosenBy}</p>
                    </div>
            </div>
        </div>
    )
}

export default DetailsPresentComponent