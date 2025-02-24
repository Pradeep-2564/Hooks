import React, { useEffect, useState } from 'react'
import './Style.css'
const ParentEffect = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const newData = await response.json();
                setData(newData);
            }
            catch{
                setError("Fetching data error")
            }
            finally{
                setLoading(false)
            }
        }
        getData();
    },[]);

    if(loading){
        <p>Loading....</p>
    }
    if(error){
        <p>{ error }</p>
    }

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {data.map((data,id)=>(
                <tr key={id}>
                    <td>{ data.id }</td>
                    <td>{ data.name }</td>
                    <td>{ data.username }</td>
                    <td>{ data.email }</td>
                    <td>{ data.address.city }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ParentEffect
