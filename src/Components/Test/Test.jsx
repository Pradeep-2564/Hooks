import React from 'react'
import Child from './Child';

const Test = () => {
    const FullData = [
        {name: "Pradeep", age: "25", address: "Hyderabad", id: 1},
        {name: "Vinesh", age: "25", address: "Medak", id: 2},
        {name: "Abhi", age: "25", address: "Gajwel", id: 3},
    ];
  return (
    <div>
      {FullData.map((user, id)=>(
        <Child
        key={id}
        names= {user.name}
        ages= {user.age}
        address= {user.address}
        />
      ))}
    </div>
  )
}

export default Test
