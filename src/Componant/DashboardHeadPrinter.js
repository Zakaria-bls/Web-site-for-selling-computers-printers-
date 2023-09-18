


import React from 'react'
import { Link } from 'react-router-dom'
import '../Componant Style/DashboardHead.css'

import add from '../assets/add.svg'
import search from '../assets/search.svg'




export default function DashboardHeadPrinter() {
  return (
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
          <Link to='/Dashboard/addPrinter' className='addArticle'>
            <img src={add} alt=''/>
            <p>Ajouter article</p>
          </Link>
    </div>
  )
}
