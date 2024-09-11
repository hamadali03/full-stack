import { useState, useEffect } from 'react';
import axios from 'axios';

const Getuser = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(''); // State to handle errors

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user/users");
        setUsers(response.data.users); // Set users state
      } catch (err) {
        setError('Failed to fetch users',err); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  if (loading) return <p>Loading...</p>; // Show loading message while data is being fetched
  if (error) return <p>{error}</p>; // Show error message if there's an error

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li> // Adjust properties based on your data structure
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
};

export default Getuser;
