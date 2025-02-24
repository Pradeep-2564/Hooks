import React, { useState } from 'react'
import './Style.css'

const ParentState = () => {
  const [name, setName] = useState('pradeep');

  const [count, setCount] = useState(0);
  
  return (
    <div>

      <div className="name">
        <h2>{name}</h2>
        <button onClick={()=> setName("Pathloth Pradeep")}>Change name</button>
      </div>

      <div className="count">
        <h2>{count}</h2>
        <div className='counts'>
          <button onClick={()=> setCount(count + 1)}>Count +</button>
          <button onClick={()=> setCount(count - 1)}>Count -</button>
          <button onClick={()=> setCount(0)}>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default ParentState
