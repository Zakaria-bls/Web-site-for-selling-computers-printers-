import React from 'react'
import '../Componant Style/HomeInformation.css'
import email from '../assets/email.svg'
import fix from '../assets/FixedPhone.svg'
import Phone from '../assets/Phone.svg'
import shipping from '../assets/Shipping.svg'
import Store from '../assets/Store.svg'

export default function HomeInformation() {
  return (
    <div className='homeInformation'>

           <div className='firstInfo data'>

              <div className='Info'>
                <img className='imgInfo' src={email} alt=''/>
                <p className='pInfo'>Forceinformatique01@gmail.com</p>
              </div>

              <div className='Info'>
                <img className='imgInfo' src= {Store} alt=''/>
                <p className='pInfo'>Magasin Ouvert de 9h a 22h</p>
              </div>
           </div>

           <div className='secandInfo data'>
              <div className='Info'>
                <img className='imgInfo' src={Phone} alt=''/>
                <p className='pInfo'>0781.98.30.14</p>
              </div>
              <div className='Info'>
                <img className='imgInfo' src={fix} alt=''/>
                <p className='pInfo'>024 770 412</p>
              </div>
            </div>
        
            <div className='thirdInfo data'>
              <p>Service apres</p>
              <p>vente</p>
            </div>

            <div className='fourthInfo data'>
              <img src={shipping} alt=''/>
              <div className='shipping'>
                <p>Livraison</p>
                <p id='wilayas'>58 wilayas</p>
              </div>
            </div> 
        </div>
  )
}
