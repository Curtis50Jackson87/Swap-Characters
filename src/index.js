import React from 'react';
import ReactDOM from 'react-dom';
import Character from './comps/Under.jsx';

const GatherComp = () => {
  const mainContSt = { backgroundColor: "black", textAlign: "center", padding: "15px 100px", color: "white" }
  return(
    <div style={mainContSt} >
      <h1>Swap Characters</h1>
      <Character />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
