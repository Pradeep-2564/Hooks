import React, { createContext } from 'react'
import Child from './Child';
import './Style.css'

const useData = createContext();

const PrarentContext = () => {
const linkData = "https://jsonplaceholder.typicode.com/users";


  return (
    <div>
      <useData.Provider value={{linkData:linkData}}>
        <Child/>
      </useData.Provider>
    </div>
  )
}

export default PrarentContext
export { useData }