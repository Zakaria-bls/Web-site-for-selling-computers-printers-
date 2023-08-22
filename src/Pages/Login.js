import React, {useEffect, useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import '../Page Style/Login.css'

import LoginLogo from "../assets/LoginLogo.svg"
import topLogin from '../assets/LoginTop.svg'
import downLogin from '../assets/LoginDown.svg'


export default function Login() {

  const navigate = useNavigate();

  const [error, setError] = useState(false)

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [name]: value,
    }));
};

  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      if(showPassword){
        setType('password')
      }else{
        setType('text')
      }
  };


  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    axios.post('http://localhost:8000/profile',{token})
    .then(response => {
        if(response.data.username){
          navigate('/Dashboard');
          console.log(response.data.username)
        }
        
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error, maybe show an error message
    });
  },[navigate])


  const handleLogin = () => {

    axios.post('http://localhost:8000/logine', userInfo)
        .then(response => {
            if(response.data.message){
              setError(true)
            }else if (response.data.token){
              const token = response.data.token;
              setError(false)
              navigate('/Dashboard');
              localStorage.setItem('jwt', token);
            }
            
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, maybe show an error message
        });
};

  return (
    <div className='pageLogine'>
      <img id='topLogin' src={topLogin} alt=''/>
      <img id='downLogin' src={downLogin} alt=''/>
      <p id='noteLogin'> <strong>Note:</strong> cette page est pour l’admin pas les utilisateurs </p>

      <div className='inputsContainer'>

        <img src={LoginLogo} alt=''/>

        <div className='containerInputs'>
          <div className='inputcontainer'>
            <p>Utilisateur</p>
            <input  onChange={handleInputChange} name="username" type='text' placeholder='EX: Akram@email.com'/>

          </div>

          <div className='inputcontainer'>
            <p>Mot de passe</p>
            <input  name="password" onChange={handleInputChange} type={type} placeholder='Password'/>
            <span className="eye"  onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {error && <span className='error'>! information erreur</span>}
          </div>
          
        </div>

        <button onClick={handleLogin}>Login</button>

      </div>
    </div>
  )
}
