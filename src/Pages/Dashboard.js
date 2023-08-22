import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    axios.post("http://localhost:8000/profile", {token})
    .then(response =>{
      if(response.data.message){
        navigate('/login');
      }
    })
  },[navigate])

  return (
    <div>
      admine
    </div>
  )
}
