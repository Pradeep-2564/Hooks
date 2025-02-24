import React from 'react'

const GrandChild = ({address}) => {
  return (
    <div>
      {address.map((add, id)=>(
        <div key={id}>
          Address: {add.address}
        </div>
      ))}
    </div>
  )
}

export default GrandChild
