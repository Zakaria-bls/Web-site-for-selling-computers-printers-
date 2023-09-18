import React, {useEffect} from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Page Style/Dashboard.css'

import SideBar from '../Componant/SideBar'
import LaptopsContainer from '../Componant/LaptopsContainer'
import PrinterContainer from '../Componant/PrinterContainer'
import AddLaptop from '../Componant/AddLaptop'
import AddPrinter from '../Componant/AddPrinter'
import DetailProduct from '../Componant/DetailProduct'


export default function Dashboard() {

  
  const { filter } = useParams();
  
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    axios.post("http://localhost:8000/profile", {token})
    .then(response =>{
      if(response.data.message){
        navigate('/login');
      }
    })

  },[navigate,location.pathname])

  let content;
  switch (filter){
    case'addPrinter':
      content=<AddPrinter/>
      break;
    case'addLaptop':
      content=<AddLaptop/>
      break;
    case'laptop':
      content = <LaptopsContainer type="Laptop"/>
      break;
    case'pcatable':
      content = <LaptopsContainer type="pcatable"/>
      break;
    case'allinone':
      content = <LaptopsContainer type="allinone"/>
      break;
    case'Imprimantes':
      content = <PrinterContainer type="Imprimantes"/>
      break;
    case'Laser':
      content = <PrinterContainer type="Laser"/>
      break;
    case'Multifonctions':
      content = <PrinterContainer type="Multifonctions"/>
      break;
    case'detailProduit':
      content = <DetailProduct/>
      break;
    default :
      content = null
  }

  return (
    <div className='dashboardContainer'>
      <SideBar/>

      

      <div className='allDashboards'>
        {content} 
      </div>
      
    </div>
  )
}
