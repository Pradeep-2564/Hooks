import React, { createContext } from 'react'
import Child from './Child';
import './Style.css'

const contextWithAxios = createContext();

const FetchWithAxios = () => {
  const linkData = "https://jsonplaceholder.typicode.com/users";

  return (
    <div>
      <contextWithAxios.Provider value={{linkData:linkData}}>
        <Child/>
      </contextWithAxios.Provider>
    </div>
  )
}

export default FetchWithAxios
export {contextWithAxios}