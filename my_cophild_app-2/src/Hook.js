import React, { useState } from "react";

function Hook () {
    const [count, setCount] = useState(0)

    // function increment () {
    //     setCount(count + 1)
    // }

    console.log(count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click to count</button>
        </div>

    )
}

export default Hook;