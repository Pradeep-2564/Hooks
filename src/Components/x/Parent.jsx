import React from 'react'
import Child from './Child'

const Parent = () => {
const Data = [
  {name: "Pradeep", role: "Developer", address: "Hyderabad", id: 1 },
  {name: "Pradeep", role: "Developer", address: "Hyderabad", id: 2 },
  {name: "Pradeep", role: "Developer", address: "Hyderabad", id: 3 },
];
  return (
    <div>
      <Child test={Data}/>
    </div>
  )
}

export default Parent
