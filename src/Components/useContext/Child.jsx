import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { TextContext } from './Parent'

const Child = () => {
  const {employees} = useContext(TextContext);
  
  return (
    <div>
      <table>
        <caption id='childCaption'>Employee's Data</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, id)=>(
            <tr key={id}>
              <td>{employee.name }</td>
              <td>{employee.ID }</td>
              <td>{employee.email }</td>
              <td id='empty'>-</td>
              <td><img src={employee.icons}alt='' /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <GrandChild/>
    </div>
  )
}

export default Child
