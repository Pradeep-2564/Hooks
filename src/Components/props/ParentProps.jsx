import React from 'react'
import Child from './Child'

const ParentProps = () => {
    const userData = [
        {name: "Pradeep", age:"25", email: "pradeep@gmail.com", address:"Hyderabad", id:1},
        {name: "Devendar", age:"24", email: "devendar@gmail.com", address:"Narsapur", id:2},
        {name: "Vinesh", age:"26", email: "vinesh@gmail.com", address:"Hyderabad", id:3},
        {name: "Abhi", age:"26", email: "abhi@gmail.com", address:"Gajwel", id:4},
        {name: "Vijay", age:"27", email: "vijay@gmail.com", address:"Medak", id:5},
    ]
  return (
    <div>
        <h2>parent component</h2>
      <Child passing={ userData }/>
      
    </div>
  )
}

export default ParentProps
