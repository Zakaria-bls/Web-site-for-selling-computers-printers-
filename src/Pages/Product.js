import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Componant/Header'
import Footer from '../Componant/Footer';

export default function Product() {

    const { filter } = useParams();


  return (
    <div>
          <Header/>
        Products
        <p>Filter: {filter}</p>
        <Footer/>
    </div>
  )
}
