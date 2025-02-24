import React, { createContext } from 'react'
import Child from './Child';
import './Style.css'

////Creation of context
const TextContext = createContext();
const Parent = () => {
  const employeesData = [
    {name: "Pradeep", ID: '125', email: "pradeep@gmail.com" , phone: "787348731",  department: "Developer", status: "Available",icons: "/Images/available.png", id: 1},
    {name: "Vinesh", ID: '128', email: "vinesh@gmail.com" , phone: "665365732",  department: "Manager", status: "Away",icons: "/Images/away.png", id: 2},
    {name: "Abhi", ID: '126', email: "abhi@gmail.com" , phone: "927387835",  department: "Deployement", status: "Busy",icons: "/Images/busy.png",  id: 3},
    {name: "Vijay", ID: '124', email: "vijay@gmail.com" , phone: "934565364",  department: "Testing", status: "Do-not-disturb",icons: "/Images/do-not-disturb.png",  id: 4},
    {name: "Tarun", ID: '122', email: "tarun@gmail.com" , phone: "983772332",  department: "Team lead", status: "Away",icons: "/Images/away.png",  id: 5},
    {name: "Devendar", ID: '134', email: "devendar@gmail.com" , phone: "8764656334",  department: "Project Manager", status: "Offline",icons: "/Images/offline.png",  id: 6},
  ];
  return (
    <div>
      <TextContext.Provider value={{employees: employeesData}}>
        <Child/>
      </TextContext.Provider>
    </div>
  )
}

export default Parent
export {TextContext}