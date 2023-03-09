import React from "react"
import JSON from "./Dramas.json"
import Korean from './Korean';
import "./global.css"


const App=(props)=>{
    return(
       
        <div>

            <Korean payload={JSON}/>

           

        </div>
        

    )
}
export default App