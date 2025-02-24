import React, { useState, useEffect } from 'react'
import { useData } from './PrarentContext';

const GrandChild = () => {
    const {linkData} = useState(useData);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(linkData)
                const newData = await response.json();
                setData(newData);
            }
            catch{
                setError("Fetching Data Error")
            }
            finally{
                setLoading(false)
            }
        }
        getData();

    },[])

    if(loading){
        return(
            <p>Please wait Fetching data is loading...</p>
        )
    }
    if(error){
        return(
            <p>{ error }</p>
        )
    }

  return (
    <div>
      <table>
        <caption>Fetching Data with useContext</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>ZipCode</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, id)=>(
                <tr key={id}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{ item.address.street }</td>
                    <td>{ item.address.city }</td>
                    <td>{ item.address.zipcode }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GrandChild
