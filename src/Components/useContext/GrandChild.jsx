import React, { useContext } from 'react'
import { TextContext } from './Parent'

const GrandChild = () => {
    const {employees} = useContext(TextContext);
    
  return (
    <div>
        <table>
            <caption id='grandChildCaption'>Employee's Data</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, id)=>(
                    <tr key={id}>
                        <td id='empty'>-</td>
                        <td id='empty'>-</td>
                        <td id='empty'>-</td>
                        <td>{ employee.phone }</td>
                        <td>{ employee.department }</td>
                        <td>{ employee.status }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default GrandChild
