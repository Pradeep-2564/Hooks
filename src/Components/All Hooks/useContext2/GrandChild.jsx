import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { contextWithAxios } from './FetchWithAxios';

const GrandChild = () => {
    const {linkData} = useState(contextWithAxios);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await axios.get(linkData)
                setData(response.data);
            }
            catch{
                setError("Fetching data is Error");
            }
            finally{
                setLoading(false);
            }
        }
        getData();

    },[]);

    if(loading){
        return(
            <p>Please wait data is Loading...</p>
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
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, id)=>(
                <tr key={id}>
                    <td>{ item.id }</td>
                    <td>{ item.name }</td>
                    <td>{ item.username }</td>
                    <td>{ item.email }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GrandChild
