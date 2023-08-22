import React, { useEffect, useState } from 'react'
import laptop from '../assets/laptop.svg'
import promotion from '../assets/promotion.svg'
import addTo from '../assets/addTo.svg'
import { Link } from 'react-router-dom'
import '../Componant Style/Product.css'

export default function Product(props) {

  const [truth,setTruth] = useState(false)

  useEffect(()=>{
    if(props.pro==="Nos Promotions"){
      setTruth(true)
    }else{
      setTruth(false)
    }
  },[props.pro])

  return (
    <div className= {truth? "Product":"promotionProductBorder"}>

            <div className='imagesProduct'>
                <img src={laptop} alt='' className='productimg'/>
                {truth && <> <img src={promotion} alt='' className='promotionimg'/>
                <p>-20%</p> </>}
            </div>

            <div className='infoProduct'>

                <Link className='nameProduct'>Asus B1502 </Link>

                <div className='priceAdd'>

                    <div className={truth?"price":"promotionProductPrice"}>193,500 DA</div>

                    <div className='add'>
                        <img src={addTo} alt=''/>
                        <p>Ajouter</p>
                    </div>

                </div>

            </div>

    </div>
  )
}
