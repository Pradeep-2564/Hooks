import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Style.css'

const FetchWithAxios = () => {

  const dataLink = "https://jsonplaceholder.typicode.com/posts";
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await axios.get(dataLink);
        setData(response.data);
      }
      catch{
        setError("Fetching data Error...")
      }
      finally{
        setLoading(false);
      }
    }
    getData();

  },[])
  
  if(loading){
    return(
      <p id='loading'>Please wait data is Loading...</p>
    )
  }
  if(error){
    return(
      <p id='error'>{ error }</p>
    )
  }

  return (
    <div>
      <table>
        <caption>Fetching Data With Axios</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item , id)=>(
            <tr key={id}>
              <td>{ item.id }</td>
              <td>{ item.title }</td>
              <td>{ item.body }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchWithAxios
