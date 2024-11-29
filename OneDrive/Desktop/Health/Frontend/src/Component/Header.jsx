// import axios from 'axios';
// import React, { useState } from 'react';
// import '../assets/Home.css';
// // import { logo } from '../Icons/Icons';


// const Header = () => {

// const [Register, setRegister] = useState(false);
// const [username , setUsername] = useState("");
// const [password , setPassword] = useState("");
// const [message , setMessage] = useState("");

// const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const endpoint = Register ? 'register' : 'login';
//             const response = await axios.post(`http://localhost:6001/${endpoint}`,{
//                 username,
//                 password,
//             });
//             setMessage(response.data.message);

//         }
//         catch(error){
//             setMessage(error.response?.data?.message || 'error occurred');
//         }
//     };



//   return (
//     <div className="headerContainer">
// {/* <header className="header">
//         <div className="logo">
//             <div className="logoIcon">
//  <img src={logo} alt="" />
//             </div>
           
//             DIESOON
//             </div>
//         <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#doctors">Doctors</a>
//             <div className="dropdown">
//             <a href="#pages">Pages</a>
//           </div>
//           <a href="#blog">Blog</a>
//           <a href="#complain">Complain</a>
//           <a href="#signup">Sign Up</a>
//           <a href="#login">Log In</a>
//         </nav>
//         <button className="hotline-btn">HOT LINE - 09856</button>
//     </header> */}



//     <div className="SignupContainer">
//         <div className="signup-container">



//      <h2>{Register ? 'Registration' :'Login'}</h2>
//             <form onSubmit={handleSubmit}>

//                 <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

//                 <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//                 <button type="submit">{Register ? 'Registration' :'Login'}</button>


//             </form>

//             <div>
//                 {
//                     message && <spa>{message}</spa>
//                 }

//                 <button onClick={() => setRegister(!Register)}>{Register ? 'switch to login' :'switch to registration'}</button>
//             </div>



//     </div>
      
//     </div>

    

//     <div className="loginContainer">
        

//     </div>




//     </div>
//   )
// }

// export default Header
