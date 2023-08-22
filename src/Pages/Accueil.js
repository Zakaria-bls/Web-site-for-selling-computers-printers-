import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Componant/Header'
import HomeInformation from '../Componant/HomeInformation'
import SlideHome from '../Componant/SlideHome'
import ListProduct from '../Componant/ListProduct'
import Footer from '../Componant/Footer'

import asus from '../assets/asus.svg'
import beforeFooter from '../assets/beforeFooter.png'
import panel from '../assets/panel.svg'




import '../Page Style/Accueil.css'




export default function Accueil() {

  const Nos_Promotions = 'Nos Promotions';
  const Lap_Top = 'Lap Top'
  const Pc_a_table = 'Pc a table'
  const All_in_one = 'All in one'
  const Imprimantes = 'Imprimantes'


  return (
    <div className='accueil'>
      <Header/>
      
      <HomeInformation/>

      <SlideHome/>

      <div className='allProductHome'>
        <ListProduct title={Nos_Promotions}/>
        <ListProduct title={Lap_Top} />
        <ListProduct title={Pc_a_table}/>
        <ListProduct title={All_in_one}/>
        <ListProduct title={Imprimantes}/>
      </div>

      <div className='mapContainer'>
        <div className='mapText'>
          <p id='mapTxt1'>Nos magasin</p>
          <a id='mapTxt2' href='https://goo.gl/maps/RJdasJh5WxXd7BBv9' target='_blank'  rel="noopener noreferrer">voir sur google map</a>
        </div>
        <div id="map">
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12358.219535206323!2d3.8174989823430976!3d36.74622063398375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1692438511783!5m2!1sen!2sdz"  loading="lazy" ></iframe>
        </div>
      </div> 

      <div className='sponsor'>
        <div className='sponsorText'>
          <p id='sponsorOur' className='sponsorTxt'>Our</p>
          <p id='sponsoPartner'  className='sponsorTxt'>Patener</p>
          <p id='sponsorTxt'  className='sponsorTxt'>Nous sommes honorés d'avoir ces incroyables partenaires</p>
        </div>
        <img src={asus} alt=''/>
      </div>

      <div className='beforeFooter'>
        <img src={beforeFooter} alt='' id='imgBeforeFooter'/>
        <div className='beforeFooterText'>
          <p id='beforeFooterTitle'>Trouvez votre meilleur appareil</p>
          <p id='beforeFooterdesc'>Nous fournissons un service complet pour la vente des ordinateurs et les imprimantes </p>
          <p id='beforeFooterContact'>CONTACTER NOUS</p>
        </div>
      </div>

      
      <Link className='panelContainer'>
        <div className='panel'>
          <img id="panelImg" src={panel} alt=''/>
          <p id="panelTxt">2</p>
        </div>
      </Link>

      <Footer/>

    </div>
  )
}
