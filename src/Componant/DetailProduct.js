import React from 'react'
import {Link} from 'react-router-dom'

import '../Componant Style/detailProductAdmin.css'

import laptop from '../assets/laptop.svg'

export default function DetailProduct() {
  return (
    <div className='detailProductContainer'>
      <div className='headerShouwingCar'>
        <p id='nameProductHeader'>ZenBook Due 14</p>
        <Link to='/Dashboard/Dashboard' id='backHeader'>Back</Link>
      </div>

      <div className='productDetailCountainer'>
        <div className='productDetail'>
           <div className='imageContainerShowCar'>
              <img src={laptop} alt=''/>
           </div>
           <div className='fichPrice'>
               <a href='facebook' target='_blank'>Fiche technique</a>
               <div className='priceShowingCar'>
                  <p id='priceBefore'>2100,500 DA</p>
                  <p id='priceAfter'>1930,500 DA</p>
               </div>
           </div>
           <div className='descriptionContainer'>
              <p className='descriptionTitle'>Description</p>
              <div className='descriptionContent'>
                <p>Caractéristiques principales :</p>
                <p>Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz Turbo - 8 Threads - Cache 12 Mo).</p>
                <p>16 Go de mémoire vive LPDDR4X.</p>
                <p>Ecran tactile de 14" avec résolution Full HD.</p>
                <p>dalle de niveau IPS.</p>
                <p>512 SSD.</p>
                <p>64Go de Ram.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
