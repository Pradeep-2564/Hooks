import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <div>
        <h2>Child component</h2>
      {props.passing.map((pass,id)=>(
        <div key={id}>
            Name: {pass.name}
            Age: {pass.age}
            Email: {pass.email}
            Address: {pass.address} 
        </div>
      ))}
      <GrandChild/>
    </div>
  )
}

export default Child
