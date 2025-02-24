import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <div>
      <p><b>Name: </b>{props.passData.name}</p>
      <p><b>Age: </b>{props.passData.age}</p>
      <GrandChild forGrand={ props.passData } />



      {/* {props.typeSec.map((item, id)=>(
        <div key={id} >
            {item.name}
            {item.age}
        </div>
      ))}
    <GrandChild items={props.typeSec }/> */}


    {/* {name}
    {age}
    {email}
    {address} */}
    </div>
  )
}

export default Child
