import { useEffect, useState } from "react"
import { backendURL } from "../Globals"

let FriendPresentsComponent = ()=> {
    
    let [presents,setPresents] = useState([])
    let [message,setMessage] = useState("")
    let [friend,setFriend] = useState("")

    let changeFriend = (e) =>{
        setFriend(e.currentTarget.value)
    }

    let getPresents = async () =>{
        let response= await fetch(backendURL+"/presents?apiKey="+localStorage.getItem("ApiKey")+"&userEmail="+friend)
        
        if (response.ok){
            let jsonData= await response.json()
            setPresents(jsonData.presents)
        }else{
            setMessage("Error")
        }
    }

    let clickShowPresent = () => {
        if (friend){
            getPresents()
        }else{
            setMessage("Please enter a friend's email")
        }
    }

    return(
        <div>
            <div>
                <div className="from-group">
                    <input type="text" placeholder="Friend Email" onChange={changeFriend} />
                </div>
                <button onClick={clickShowPresent}>Show Presents</button>
            </div>
            {friend ? (
                <div>
                    <h2>{friend}'s Presents</h2>
                    {message && <h3 className="errorMessage">{message}</h3>}
                    <div className="present-list">
                        {presents.map(pres => (
                            <div className="present" key={pres.id}>
                                <h3>{pres.present}</h3>
                                <p>{pres.description}</p>
                                <p>{pres.url}</p>
                                <p>{pres.price}</p>
                                <p>{pres.ChosenBy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Please enter a friend's email to see their presents.</p>
            )}
        </div>
    )
}

export default FriendPresentsComponent