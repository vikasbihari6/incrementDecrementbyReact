import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "./actions/index";
import app from './app.css'

const App=()=>{
    const myState=useSelector((state)=>state.changeNumber);
    const dispatch=useDispatch();
      
    return(
        <>
            <div className="container">
                
                    <h1>Increment/Decrement counter</h1>
                    <h3>using redux</h3>
                    <div>
                        <button onClick={()=>dispatch(decNumber())}>-</button>
                        <input type="text" value={myState}></input>
                        <button onClick={()=>dispatch(incNumber(5))}>+</button>
                    </div>

            </div>
        </>
    )
}

export default App;

