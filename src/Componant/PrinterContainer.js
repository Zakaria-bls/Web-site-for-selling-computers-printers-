  import React from 'react'

  

  import '../Componant Style/tablesAdmin.css'


  
  import DashboardHeadPrinter from './DashboardHeadPrinter'
  import TablePrinter from './TablePrinter'

  export default function PrinterContainer(props) {
    return (
      <div className='dataShows'>
        <DashboardHeadPrinter/>
        <TablePrinter/>
        <p>hello {props.type}</p>
      </div>
    )
  }
  