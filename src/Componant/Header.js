import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../Componant Style/Header.css'


import logo from '../logo.svg'

export default function Header() {
     const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        navigate(`/Product/${selectedValue}`);
    };

    const location = useLocation();

    const isActive = (pathname) => {
        return pathname === location.pathname ? 'active-link' : '';
    };

  return (
    <div className='headerComponant'>
      <div className='logoContainer'>
        <Link to="/" id='logo'> <img src={logo} alt=''/> </Link>
      </div>
      <ul className='headerList'>
          <li>
          <select className= {`Links ${isActive("/Product/Products")}`}  onClick={handleSelectChange}>
                <option value="Products">Product</option>
                <option value="Laptops">Laptops</option>
                <option value="Imprements">Imprements</option>
            </select>  
          </li>
          <li>
            <Link className={`Links ${isActive("/")}`} to="/">Accueil</Link>
          </li>
          <li>
            <Link className={`Links ${isActive("/Propos")}`} to="/Propos">A propos</Link>
          </li>
          <li>
            <Link className={`Links ${isActive("/Entreprises")}`} to="/Entreprises">Espace Entreprises</Link>
          </li>
          <li>
            <Link className={`Links ${isActive("/Partner")}`} to="/Partner">Business Partner</Link>
          </li>
        </ul>
    </div>
  )
}
