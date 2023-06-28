import React from 'react'

function ChildComponent (props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

/*

  Arrow function's literal is simpler and effective while passing parameters to the function from child component to parent component

*/
