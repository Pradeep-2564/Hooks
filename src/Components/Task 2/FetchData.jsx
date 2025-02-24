import React, { useState, useEffect } from 'react';
import './Style.css'

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch {
        setError('Fetching data is error')
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 


  useEffect(() => {
    if (search === '') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter(user =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, users]);



  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  if(error){
    return(
        <span>{ error }</span>
    )
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
      />

      {loading && <p>Loading...</p>}

      {filteredUsers.length === 0 && !loading && (
        <p>No users found</p>
      )}

      {!loading && filteredUsers.length > 0 && (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user, id)=>(
                    <tr key={id}>
                        <td>{ user.name }</td>
                        <td>{ user.email }</td>
                    </tr>
                ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchData;
