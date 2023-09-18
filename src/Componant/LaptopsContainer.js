import React from 'react'

import '../Componant Style/tablesAdmin.css'

import DashboardHeadLaptop from './DashboardHeadLaptop'
import TableLaptop from './TableLaptop'

export default function LaptopsContainer(props) {

  return (
    <div className='dataShows'>
      <DashboardHeadLaptop/>
      <TableLaptop/>
      <p>Hello {props.type}</p>  
    </div>
  )
}
