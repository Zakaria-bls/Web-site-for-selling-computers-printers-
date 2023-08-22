import React from 'react'

import '../Page Style/pageNotFound.css'

import Header from '../Componant/Header'
import Footer from '../Componant/Footer'


export default function PageNotFound() {
  return (
    <div>
        <Header/>
        <div className='container404'>
          <p id='P404'>404</p>
          <p id='pageN'>Page Not Found</p>
        </div>
        <Footer/>
    </div>
  )
}
