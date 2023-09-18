import React, { useState } from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import '../Componant Style/sidebar.css'


import logo from '../logo.svg'
import Pcs from '../assets/Pcs.svg'
import arrDown from '../assets/arrow-down.svg'
 import arrUp from '../assets/arrow-up.svg'
import printers from '../assets/printers.svg'
import command from '../assets/command.svg'
import abonnement from '../assets/abonnements.svg'
import contact from '../assets/contact.svg'
import panel from '../assets/panell.svg'
import deconnect from '../assets/deconnecter.svg'
import ellipse from '../assets/ellipse.svg'
import ellipseW from '../assets/ellipseW.svg'

export default function SideBar() {

    const location = useLocation();

    const filter = useParams();

    const currentPath = filter.filter;



    const[itemVisible1, setItemVisible1] = useState(false);
    const[itemVisible2, setItemVisible2] = useState(false);

    const [print, setPrint] = useState(false)
    const [lapt, setLapt] = useState(false)

    
    if(currentPath==="laptop" || currentPath==="pcatable" || currentPath==="allinone"){
      if(!lapt){
        setLapt(true)
        setPrint(false)
      }
    }else{
      if(lapt){
        setLapt(false)
      }
    }

    if(currentPath==="Imprimantes" || currentPath==="Laser" || currentPath==="Multifonctions"){
      if(!print){
        setPrint(true)
        setLapt(false)
      }
    }else{
      if(print){
        setPrint(false)
      }
    }

    const toggle1 = ()=>{
        setItemVisible1(!itemVisible1)
        setItemVisible2(false)
    }

    const toggle2 = ()=>{
        setItemVisible2(!itemVisible2)
        setItemVisible1(false)
    }

    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.id;
        navigate(`/Dashboard/${selectedValue}`);
    };


    const isActiveClair = (pathname) => {
        return pathname === location.pathname ? 'active-link' : '';
    };

    const isActive = (pathname) => {
        return pathname === location.pathname ? 'activee-link' : 'notActibe';
    };

    const linkActive =(pathname)=>{
        return pathname === location.pathname ? ellipseW : ellipse
    }

    const handleLogout = () => {
        // Delete the item from localStorage
        localStorage.removeItem('jwt');
    
        // Navigate to the login page
        navigate('/login');
      };


  return (
    <div className='sideBarCoContainer'>
      <div className='sidedBarContainer'>

            <Link to='/'> <img id='logoSideBar' src={logo} alt=''/> </Link>

            <hr/>

            <div className='sideBar'>

              <div className='sideBarItems'>

                <ul className='sideBarList'>

                  <li className=' sideBarItemSpiciale'>

                    <div className={`item ${lapt ? 'active-link' : ''}`}  onClick={toggle1}>
                      <img className='iconsSideBar' src={Pcs} alt=''/>
                      <div>
                        <p>Ordinateurs</p>
                        <img className='arrowIcon' src={itemVisible1 ? `${arrUp}` :`${arrDown}`} alt=''/>
                      </div>
                    </div>

                    {
                      itemVisible1 
                      &&
                      <ul className='ListInsideList'>
                          <li><p id="laptop" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/laptop")}`} ><img src={linkActive("/Dashboard/laptop")} alt=''/>Lap Top</p></li>
                          <li><p id="pcatable" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/pcatable")}`}><img src={linkActive("/Dashboard/pcatable")} alt=''/>Pc a table</p></li>
                          <li><p id="allinone" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/allinone")}`}><img src={linkActive("/Dashboard/allinone")} alt=''/>All in one</p></li>
                      </ul>
                    }

                  </li>

                  <li className='sideBarItem'>

                    <div className={`item ${print ? 'active-link' : ''}`} onClick={toggle2}>
                        <img className='iconsSideBar'  src={printers} alt=''/>
                        <div>
                          <p>Imprimantes</p>
                          <img className='arrowIcon' src={itemVisible2 ? `${arrUp}`  :`${arrDown}`} alt=''/>
                        </div>
                    </div>

                    {
                      itemVisible2 
                      &&
                      <ul className='ListInsideList'>
                          <li><p id="Imprimantes" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/Imprimantes")}`}><img src={linkActive("/Dashboard/Imprimantes")} alt=''/>Imprimantes</p></li>
                          <li><p id="Laser" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/Laser")}`}><img src={linkActive("/Dashboard/Laser")} alt=''/>Laser</p></li>
                          <li><p id="Multifonctions" onClick={handleSelectChange} className={`linkInsideList ${isActive("/Dashboard/Multifonctions")}`}><img src={linkActive("/Dashboard/Multifonctions")} alt=''/>Multifonctions</p></li>
                      </ul>
                    }

                  </li>

                  <li className={`sideBarItem `}>
                    <Link  to="/Dashboard/Panneau" >
                        <div className={`item ${isActiveClair("/Dashboard/Panneau")}`}>
                            <img className='iconsSideBar' src={panel} alt=''/>
                            <div>
                              <p>Panneau</p>
                            </div>
                        </div>
                    </Link>
                  </li>

                  <li className='sideBarItem'>
                    <Link to="/Dashboard/Commandes">
                        <div className={`item ${isActiveClair("/Dashboard/Commandes")}`}>
                            <img className='iconsSideBar' src={command} alt=''/>
                            <div>  
                              <p>Commandes</p>
                            </div>
                        </div>
                    </Link>
                  </li>

                  <li className='sideBarItem'>
                    <Link to="/Dashboard/Abonnements">
                        <div className={`item ${isActiveClair("/Dashboard/Abonnements")}`}>
                            <img className='iconsSideBar' src={abonnement} alt=''/>
                            <div>  
                              <p>Abonnements</p>
                            </div>
                        </div>
                    </Link>
                  </li>

                  <li className='sideBarItem'>
                    <Link to="/Dashboard/Contacts">
                        <div className={`item ${isActiveClair("/Dashboard/Contacts")}`}>
                            <img className='iconsSideBar' src={contact} alt=''/>
                            <div> 
                              <p>Contacts</p>
                            </div>
                        </div>
                    </Link>
                  </li>

                </ul>

              </div>

              <div onClick={handleLogout} className='deconnecter'>
                <img src={deconnect} alt=''/>
                <p>Déconnecter</p>
              </div>

            </div>
          </div>
      </div>

  )
}
