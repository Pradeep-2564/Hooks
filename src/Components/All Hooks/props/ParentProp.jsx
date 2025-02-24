import React from 'react'
import Child from './Child'
import './Style.css'
const ParentProp = () => {

    // const passData = {
    //     name: "Pradeep",
    //     age: "25",
    //     email: "pradeep@gmail.com",
    //     address: "Hyderabad",
    // }

    const myInfo = [
        {id: 1, name: "Pradeep", age: '25', email: "pradeep@gmail.com", address: "Medak"},
        {id: 2, name: "Vinesh", age: '26', email: "vinesh@gmail.com", address: "Hyderabad"},
    ]
  return (
    <div>
      {/* <Child passData={ passData }/> */}

      <Child typeSec={ myInfo } />

      {/* {myInfo.map((item, id)=>(
        <Child
            key={id}
            name={item.name}
            age={item.age}
            email={item.email}
            address={item.address}
        />
      ))} */}

    </div>
  )
}

export default ParentProp
