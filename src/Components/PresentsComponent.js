import { useEffect, useState } from "react"
import { backendURL } from "../Globals"
import { Link } from "react-router-dom"

let PresentsComponent = ()=> {
    
    let [presents,setPresents] = useState([])
    let [message,setMessage] = useState("")

    useEffect(()=>{
        getPresents();
    },[])

    let getPresents = async () =>{
        let response= await fetch(backendURL+"/presents?apiKey="+localStorage.getItem("ApiKey"))
        if (response.ok){
            let jsonData= await response.json()
            setPresents(jsonData.presents)
        }else{
            setMessage("Error")
        }
    }

    let deletePresent = async (id) =>{
        let response= await fetch (backendURL+"/presents/"+id+"?apiKey="+localStorage.getItem("ApiKey"),{
            method:"DELETE"
        })
        if (response.ok){
            //getPresents();
            let newpres= presents.filter(pres => pres.idPres != id)
            setPresents(newpres)
        }else{
            let jsonData= await response.json()
            setMessage(jsonData.error)
        }
    }
    return(
        <div>
            <h2>Presents</h2>
            { message != "" && <h3 className="errorMessage">{message}</h3>}
            <div class= "present-list">
                {presents.map (pres => 
                    (
                        <div>
                            <Link to= { "/present/"+ pres.idPres}>
                                <h3>{pres.present}</h3>
                            </Link>
                            <p>{pres.description}</p>
                            <p>{pres.url}</p>
                            <p>{pres.price}</p>
                            <p>{pres.ChosenBy}</p>
                            <button onClick={() => {deletePresent(pres.idPres)}}>Delete</button>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default PresentsComponent