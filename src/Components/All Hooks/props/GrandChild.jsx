import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      <p><b>Email: </b>{props.forGrand.email}</p>
      <p><b>Address: </b>{props.forGrand.address}</p>


      {/* <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item, id)=>(
                <tr key={id}>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                </tr>
            ))}
        </tbody>
      </table> */}

    </div>
  )
}

export default GrandChild
