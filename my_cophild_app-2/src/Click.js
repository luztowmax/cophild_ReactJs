import React from "react";

function Click () { 

    function handleClick () {
        console.log("I was clicked");
    }
  return (
    <div>
      <button onClick={handleClick} style={{ color: "white", backgroundColor: "black"}}>click me</button>
    </div>
  )
}

export default Click;