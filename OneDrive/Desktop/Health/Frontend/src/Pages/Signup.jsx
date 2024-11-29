import axios from 'axios';
import React, { useState } from 'react';
import '../assets/Home.css';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {

const [Register, setRegister] = useState(false);
const [username , setUsername] = useState("");
const [password , setPassword] = useState("");
const [message , setMessage] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const endpoint = Register ? 'register' : 'login';
            const response = await axios.post(`http://localhost:6001/${endpoint}`,{
                username,
                password,
            });
            setMessage(response.data.message);
            if (!Register && response.status === 200) {
        
        navigate('/Admin');
      }

        }
        catch(error){
            setMessage(error.response?.data?.message || 'error occurred');
        }
    };



  return (
    

    <div className="SignupContainer">
    <div className="signup-container">
    <h2 className="topicChange">{Register ? 'Registration' : 'Login'}</h2>
    <form className="formValidation" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
            className="UserInput"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
    </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
            className="UserInput"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
    <button className="UserSubmission" type="submit">
        {Register ? 'Register' : 'Login'}
    </button>
    </form>
    <div className="MessageContent">
    {message && <span>{message}</span>}
    <button className="SwitchingStmt" onClick={() => setRegister(!Register)}>
        {Register ? 'Switch to Login' : 'Switch to Registration'}
    </button>
    </div>
</div>
</div>



)
}

export default SignUp


