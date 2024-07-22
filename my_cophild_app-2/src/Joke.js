import React from "react";

function Joke (ruth) {
    return (
        <div>
            <h1 style={{ color: "purple", backgroundColor: "yellow"
            }}>Question:{ruth.question}</h1>
            <h3 style={{ color:"green" }}>Punchline:{ruth.punchline}</h3>
        </div>
    )
}

export default Joke; 