import React, {useState} from 'react'

import remove from '../assets/remove.svg'
import eye from '../assets/eye.svg'
import product from '../assets/laptop.svg'

import DeleteCountainer from './DeleteCountainer'
import { Link } from 'react-router-dom'


export default function TableLaptop() {

  const [delConf, setDelConf] = useState(false)

  const showDeletConfermation = () =>{
      setDelConf(true)
  }

  return (
    <div className='containerTable'>
            <div>
                <p className='titleTables'>All Products</p>
                <table>
                    <thead>
                        <tr>
                            <th><p>Image</p></th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th colSpan={3}>Description</th>
                            <th>Type</th>
                            <th>Prix</th>
                            <th>promo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className='imageProduct' src={product} alt=''/></td>
                            <td>Asus</td>
                            <td>ZenBook Duo 14</td>
                            <td colSpan={3} className='descTable'>Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...Processeur Intel Core i7-1165G7 (Quad-Core 1.2 GHz - 2.8 GHz / 4.7 GHz ...</td>
                            <td>i7 10em</td>
                            <td>1.930.500,00</td>
                            <td>Oui</td>
                            <td className='images'>
                              <img className='supptable' src={remove} onClick={showDeletConfermation} alt='remove'/>
                              <Link to='/Dashboard/detailProduit'><img className='eyetable' src={eye} alt='eye'/></Link> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DeleteCountainer state={delConf} setstate={setDelConf}/>
        </div>
  )
}
