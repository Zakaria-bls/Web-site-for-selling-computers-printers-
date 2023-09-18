import React from 'react'

import alertDEl from '../assets/alertDel.svg'


export default function DeleteCountainer({ state, setstate }) {
    
const hideDeletConfermation = () =>{
    setstate(false)
}

  return (
    <div>
    {state && <div className='deleConf'>
    <div className='upDele'>
        <div>
            <img src={alertDEl} alt=''/>
            <p>You really want to delete this product !</p>
        </div>
    </div>
    <div className='downDele'>
        <p className='textDel'>if you delete this product you will not be able to see it again </p>
        <div>
            <p className='cancelDel' onClick={hideDeletConfermation} >Cancel</p>
            <p className='okDel'>Delete</p>
        </div>
    </div>
   </div>}
   </div>

  )
}
