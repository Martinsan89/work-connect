import React, { useState } from 'react'
import styles from './Register.module.css'
import Logo from '../../assets/Login/Logo.svg'
// import logo from '../../assets/Register/LogoWorkConnect.svg'
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


import { Navigate } from 'react-router-dom'



const Register = ({ companyButton, setCompanyButton, freelaButton, setFreelaButton, personButon, setPersonButton }) => {
    
    

    const [nextPage, setNextPage] = useState(false);

    if(nextPage) {
        return <Navigate to='/createnewaccount'/>
    }

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
                        onClick={ () => { setNextPage(true) } }
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
        {/* Footer */}
        <div className={`${styles.footer}`} style={{background:'#1870ca'}}>
				<div className="col-12 d-flex justify-content-center py-4">
					<img style={{width:'20%'}} src={Logo} alt="logo" />
				</div>
				<div className="col-12 d-flex justify-content-center py-3 mb-1">
					<div style={{borderRight: '1px white solid'}}>
						<span style={{color: '#f6f6f6', paddingRight: '11px',
					paddingLeft: '25px', fontSize:'14px'}} 
					> Privacy Policy</span>
					</div>
					<div style={{borderRight: '1px white solid'}}>
						<span style={{color: '#f6f6f6', paddingRight: '11px',
						paddingLeft: '15px', fontSize: '14px'}}> Terms of Use</span>
					</div>
					<span className="" style={{color: '#f6f6f6', paddingRight: '11px',
					paddingLeft: '25px', fontSize: '14px'}}>Cookies Policy</span>
				</div>
				<div className="row" style={{background:'#00007c', width:'101%'}}>
					<div className=" text-center text-white " style={{width:'50%', margin:'auto'}}>
						<p className="my-2" style={{backgroundColor: '#00007c', fontSize:'15px'}}>Copyright © 	2022 WorkConnect 2022. Alle reachten voorbeh ouden</p>
					</div>
				</div>
      </div>
        {/* <footer className={ styles.footer }>
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
        </div> */}
    </div>
  )
}

export default Register