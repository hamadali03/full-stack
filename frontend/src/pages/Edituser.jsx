import { useState } from 'react';
import axios from 'axios';

const Edituser = () => {
 // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
   
  // });

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // // for (const key in formData) {
    // //   data.append(key, formData[key]);
    // // }
     data.append('name',name)
     data.append('email',email)
     data.append('password',password)
    try {
      const response = await axios.post("http://localhost:8000/api/user/sign",data )
      
      setMessage(response.data.message);
      setname('');
      setemail('');
      setpassword('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
   
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
      </div>
    </div>
  );
}

export default Edituser
