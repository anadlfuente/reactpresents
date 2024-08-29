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
    return(
        <div>
            <h2>Presents</h2>
            { message != "" && <h3 className="errorMessage">{message}</h3>}
            <div class= "present-list">
                {presents.map (pres => 
                    (
                        <Link to= { "/present/"+ pres.idPres}>
                            <div className="present">
                                <h3>{pres.present}</h3>
                                <p>{pres.description}</p>
                                <p>{pres.url}</p>
                                <p>{pres.price}</p>
                                <p>{pres.ChosenBy}</p>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default PresentsComponent