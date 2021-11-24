import './App.css';
import React from 'react'
import { incNumber, decNumber } from './actions/index';
import {useSelector, useDispatch} from "react-redux"

function App() {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
  return (
     <div className="container">
         <h1>Increment/Decrement Counter</h1>
         <div className="box">
             <button className="quantity_minus" onClick={ () => dispatch(decNumber)}>-</button>
             <input name="quantity" type="text" value={myState} />
             <button className="quantity_plus" onClick={() => dispatch(incNumber)}>+</button>
         </div>
     </div>
  );
}

export default App;
