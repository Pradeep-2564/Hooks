import React from 'react'
import GrandChild from './GrandChild'

const Child = ({test}) => {
  return (
    <div>
      {test.map((item, id)=>(
        <div key={id}>
          Name: {item.name}
          Role: {item.role}
        </div>
      ))}
      <GrandChild address={test}/>
    </div>
  )
}

export default Child
