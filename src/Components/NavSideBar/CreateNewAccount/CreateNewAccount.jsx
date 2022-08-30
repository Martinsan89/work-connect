import React, { useState } from 'react'
import styles from './CreateNewAccount.module.css'
import logo from '../../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../../assets/Register/Vector.svg'
import Elipse from '../../../assets/Register/Elipse.svg'
import Company from '../../../assets/Register/CompanyIcon.svg'
import CompanyGray from '../../../assets/Register/CompanyGrayIcon.svg'
import Freelancer from '../../../assets/Register/FreelancerIcon.svg'
import Person from '../../../assets/Register/PersonIcon.svg'
import { Form } from 'react-bootstrap'


const CreateNewAccount = () => {

    const [companyButton, setCompanyButton] = useState(true)
    const [freelaButton, setFreelaButton] =useState(false)
    const [personButon, setPersonButton] = useState(false)

  return (
    <>
        <div className= { styles.mainDiv }>

            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', position:'relative'}}>
                <div style={{ position: 'absolute', top: '2rem', right: '3rem' }}>
                    <img src={ Elipse } alt="menu" />
                </div>
                <div style={{position:'absolute', top: '2.8rem', right:'3.76rem'}}>
                    <img src={ Vector } alt="vector" />
                </div>
			</div>

            <div className={ styles.registerCard }>
                <h2 className= { styles.registerTitle }>Create New Account</h2>
                <div className={ styles.cardButtonsDiv }>
                    
                </div>
                
                <div className='d-flex pt-5 justify-content-center gap-4'>
                    
                </div>

                
            </div>
        </div>
        <footer className={ styles.footer }>
            <div className='text-center'>
                <img className={ styles.footerLogo } src={ logo } alt="Logo" />
                <div className={ styles.footerText }>
                    <a href="/" className={ styles.footerLink }>Privacy Policy</a>
                    <a href="/" className={ styles.footerLink }> | Privacy Policy | </a>
                    <a href="/" className={ styles.footerLink }>Cookies Policy</a>
                </div>
            </div>
        </footer>
        <div className={ styles.copyrightDiv }>
            <p className={ styles.copyrightText }>Copyright ©  WorkConnect 2022. All Rights Reserved.</p>
        </div>
    </>
  )
}

export default CreateNewAccount