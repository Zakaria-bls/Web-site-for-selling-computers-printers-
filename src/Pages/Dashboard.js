import React, {useEffect, useState} from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import '../Page Style/Dashboard.css'

import SideBar from '../Componant/SideBar'

import add from '../assets/add.svg'
import search from '../assets/search.svg'




export default function Dashboard() {

  const [path, setPath] = useState(false)
  
  const location = useLocation();

  const { filter } = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    axios.post("http://localhost:8000/profile", {token})
    .then(response =>{
      if(response.data.message){
        navigate('/login');
      }
    })

    location.pathname === "/Dashboard" ? setPath(true) : setPath(false);

  },[navigate,location.pathname])

  return (
    <div className='dashboardContainer'>
      <SideBar/>

      

      <div className='allDashboards'>
        <div className='headerDashboard'>
          <div className='searchBarDash'>
            <div>
              <img src={search} alt=''/>
              <input type="text" placeholder='Search for a Model'/>
            </div>
            <hr/>
            <select>
              <option>Brand</option>
            </select>
          </div>
          <Link to='/Dashboard/add article' className='addArticle'>
            <img src={add} alt=''/>
            <p>Ajouter article</p>
          </Link>
        </div>

        {path ? <p>Welcome To dashboard</p> : `${filter}`}
      </div>
      
    </div>
  )
}
