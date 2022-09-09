import React, { useState } from 'react'
import styles from './Register.module.css'
import logo from '../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../assets/Register/Vector.svg'
import Elipse from '../../assets/Register/Elipse.svg'
import Company from '../../assets/Register/CompanyIcon.svg'
import CompanyGray from '../../assets/Register/CompanyGrayIcon.svg'
import Freelancer from '../../assets/Register/FreelancerIcon.svg'
import FreelancerWhite from '../../assets/Register/FreelancerWhite.svg'
import Person from '../../assets/Register/PersonIcon.svg'
import PersonWhite from '../../assets/Register/PersonWhite.svg'
import { Form } from 'react-bootstrap'
// import { Navigate } from 'react-router-dom'
// import logo from '../../assets/Register/LogoWorkConnect.svg'
// import Company from '../../assets/Register/CompanyIcon.svg'
// import Freelancer from '../../assets/Register/FreelancerIcon.svg'
// import Person from '../../assets/Register/PersonIcon.svg'
// import {Button, Modal, Form} from 'react-bootstrap'



const Register = () => {

    const [business, setBusiness] = useState(false)
    const [freelancer, setFreelancer] = useState(false)
    const [privateUser, setPrivateUser] = useState(false)
    
    const [companyButton, setCompanyButton] = useState(true)
    const [freelaButton, setFreelaButton] =useState(false)
    const [personButon, setPersonButton] = useState(false)

  return (
    <div>
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
                <h2 className= { styles.registerTitle }>Register</h2>
                <p className= { styles.registerSubTitle }>Select the profile that fits to you</p>
                <div className={ styles.cardButtonsDiv }>
                    <div>
                        <button 
                            onClick={ () => {setCompanyButton(true); setFreelaButton(false); setPersonButton(false) } }
                            style={ companyButton ? { backgroundColor: '#2898EE' } : { backgroundColor: '#EAEBEE' } }
                            className={ styles.companyButton } >
                            <img 
                                src={ companyButton ? Company : CompanyGray } 
                                alt="Company Icon" />
                        </button>
                        <figcaption
                            style={ companyButton ? { color: '#107ACC' } : { color: '#B3B1B4' } }
                            className= { styles.captionCompanyButton }>
                                Business
                        </figcaption>
                    </div>
                    <div>
                        <button 
                            onClick={ () => { setCompanyButton(false); setFreelaButton(true); setPersonButton(false) } }
                            style={ freelaButton ? { backgroundColor: '#2898EE' } : { backgroundColor: '#EAEBEE' } }
                            className={ styles.freelancerButton }>
                            <img 
                                src={ freelaButton ? FreelancerWhite : Freelancer} 
                                alt="Freelancer Icon" />
                        </button>
                        <figcaption 
                            style={ freelaButton ? { color: '#107ACC' } : { color: '#B3B1B4' } }
                            className= { styles.captionFreelancerButton }>
                                Freelancer
                        </figcaption>
                    </div>
                    <div>
                        <button 
                            onClick={ () => { setCompanyButton(false); setFreelaButton(false); setPersonButton(true) } }
                            style={ personButon ? { backgroundColor: '#2898EE' } : { backgroundColor: '#EAEBEE' } }
                            className={ styles.personButton }>
                            <img 
                                src={ personButon ? PersonWhite : Person } 
                                alt="Person Icon" />
                        </button>
                        <figcaption 
                            style={ personButon ? { color: '#107ACC' } : { color: '#B3B1B4' } }
                            className= { styles.captionPersonButton }>
                                Private User
                            </figcaption>
                    </div>
                </div>
                
                <div className='d-flex pt-5 justify-content-center gap-4'>
                    <span className= { styles.spanCardForm }>I am from</span>
                    <Form.Select 
                        className={ styles.formSelectCard }
                        // ⬇️ colocar todo este style en el archivo css de arriba ⬇️ 
                        style={{width: '192px', height: '38px', padding:'6px 1rem', borderRadius:'1rem', marginLeft:'10px', color: '#B3B1B4', fontWeight: '300'}} aria-label="Default select example">
                        <option className={ styles.spanSelect }>
                            Select
                        </option>  
                        {/* style={{width: '192px', height: '38px', padding:'6px 1rem', borderRadius:'1rem', marginLeft:'10px', color: '#B3B1B4', fontWeight: '300'}} aria-label="Default select example"> Select */}
                        {/* <option> */}
                            {/* <h6 className={ styles.spanSelect }>Select</h6> */}
                        {/* </option>   */}
                    </Form.Select>
                    <button 
                        onClick={ companyButton ? () => { setBusiness(true) } : '' }
                        className={styles.continueCardButton}>
                        continue
                    </button>
                </div>

                <div className={ styles.insideFooterCard }>
                    <p className={ styles.insideFooterText }>
                        Already have an account? 
                            <span className={ styles.insideFooterSpan }>
                                <a href="/" className={ styles.insideFooterLogin }>Login</a>
                            </span>
                    </p>
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
    </div>
  )
}

export default Register