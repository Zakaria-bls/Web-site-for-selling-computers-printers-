import React from 'react'
import { Link } from 'react-router-dom'
import '../Componant Style/ListProduct.css'

import Product from './Product'

export default function ListProduct(props) {
  return (
    <div className='allProduct'>

        <div className='headerListProduct'>
            <p>{props.title}</p>
            <Link className='seeAll' to="/Product">See All</Link>
        </div>

        <div className='containerProducts'>
            <Product pro={props.title}/>
            <Product pro={props.title}/>
            <Product pro={props.title}/>
        </div>

  </div>
  )
}
