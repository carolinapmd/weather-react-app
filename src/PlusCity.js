import React from "react";
import "./PlusCity.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import "./Weather.css"


export default function PlusCity(){
    const [loaded, setLoaded] = useState(false)

   return(
       <div className="Weather">   

       <div className="PlusCity col">
           <div className="card-body">
            <form>
                <input type="search" className="form-control" autoFocus="on" placeholder="Enter another city..." />
                <button type="submit" className="btn btn-light mt-1"><FontAwesomeIcon icon="plus" />                   
                </button>
            </form>           
           </div>
        </div>
       </div>
       )
    ;


}