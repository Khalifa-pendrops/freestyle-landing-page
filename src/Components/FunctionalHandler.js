import React from 'react'


    const clickHandler = () => {
      console.log("button clicked!");
}
    

function FunctionalHandler(props) {

  return (
    <div>
      <h1>Hello {props.name}! has a title: { props.title}</h1>
      <button onClick={clickHandler}>Hit Me</button>
    </div>
  )
}

export default FunctionalHandler
