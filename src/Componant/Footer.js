import React from 'react'
import { Link } from 'react-router-dom'

import '../Componant Style/Footer.css'

import logo from '../logo.svg'
import linkedin from '../assets/LinkedI.png'
import Facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import arrowMail from '../assets/arrowMail.png'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <div className='footerSection s1'>
            
            <div className='s1Up'>
                
                <div className='s1Txt Txt'>
                <Link id='linkFooter' to="/"><img src={logo} alt=''/></Link>
                <p>Découvrez Force Informatique - Votre Hub Techno </p>
                <p>Des ordinateurs aux imprimantes et aux accessoires, nous </p>
                <p>sommes votre référence pour tout ce qui est </p>
                <p>technologique. Rehaussez votre vie numérique avec nous.</p>
                </div>

                <div className='s1Down'>
                    <div className='socialMedia'>
                    <a href='https://www.facebook.com' target='_blank'  rel="noopener noreferrer"><img src={Facebook} alt=''/></a>
                    <a href='https://www.instagram.com' target='_blank'  rel="noopener noreferrer"><img src={instagram} alt=''/></a>
                    <a href='https://www.linkedin.com' target='_blank'  rel="noopener noreferrer"><img src={linkedin} alt=''/></a>
                    </div>

                    <div className='Txt'>
                    <p>© 2023 . All rights reserved.</p>
                    </div>
                </div>

            </div>

            </div>

            <div className='footerSection footerSame s2'>
            <p className='footerSameTitle'>Take a tour</p>
            <div className='footerDiv'>
                <Link to="/Partner" className='footerSameTxt'>Partner</Link>
                <Link className='footerSameTxt'>Products</Link>
            </div>
            </div>

            <div className='footerSection footerSame s3'>
            <p className='footerSameTitle'>Our Company</p>
            <div className='footerDiv'>
                <Link className='footerSameTxt'>à propos de nous</Link>
                <a className='footerSameTxt' href='https://goo.gl/maps/RJdasJh5WxXd7BBv9' target='_blank'  rel="noopener noreferrer">Localisation</a>
                <Link className='footerSameTxt'>Contacter nous</Link>
            </div>
            </div>

            <div className='footerSection footerSame s4'>
            <p className='footerSameTitle'>Subscribe</p>
            
            <div className='Txt inputTxt'>
                <p>Abonnez-vous pour recevoir les derniers produits et nouvelles de nous</p>
                
                <div className='inputContainer'>
                <input type='email' placeholder='Email Address'/>
                <div className='sendMail'>
                    <img src={arrowMail} alt=''/>
                </div>
                </div>
            </div>
            </div>

        </div>
</div>
  )
}
