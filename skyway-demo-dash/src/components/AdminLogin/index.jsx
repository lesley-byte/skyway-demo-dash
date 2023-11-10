import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUser, setIsAdmin } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'password') {
      // Here you should usually call your backend service for authentication
      // For the purposes of this example, we'll just simulate successful login

      // Set the user context state as logged in
      setUser(credentials.username);
      setIsAdmin(true);

      // Redirect to the admin dashboard
      navigate('/AdminDashboard');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen overflow-auto bg-gray-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-bold">Admin Login</h1>
          {loginError && <p className="text-center text-red-500">{loginError}</p>}
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border rounded-lg"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
