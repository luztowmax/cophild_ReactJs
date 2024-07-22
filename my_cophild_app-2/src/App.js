import React from "react";
import Joke from "./Joke";

function App () {
  return(
    <>
      <Joke 
        question="What is react"
        punchline="Go search google"
      />

      <Joke 
        question="What is a component"
        punchline="You can read the w3 school material"
      />

      <Joke 
        question="Why are we doing React"
        punchline="We keep coding!"
      />
    </>
  )
}

export default App;