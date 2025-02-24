import React from 'react'
import GrandChild from './GrandChild'

const Child = ({names, ages, address}) => {

  return (
    <div>
      <p><b>Name: </b>{ names }</p>
      <GrandChild
        age={ages}
        address={address}
      />
    </div>
  )
}

export default Child
