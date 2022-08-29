import React from 'react'
import styles from './Register.module.css'
import logo from '../../../assets/Register/LogoWorkConnect.svg'
import Company from '../../../assets/Register/CompanyIcon.svg'
import Freelancer from '../../../assets/Register/FreelancerIcon.svg'
import Person from '../../../assets/Register/PersonIcon.svg'
import {Button, Modal, Form} from 'react-bootstrap'


const Register = () => {
  return (
    <>
        <div className= { styles.mainDiv }>
            <div className={ styles.registerCard }>
                <h2 className= { styles.registerTitle }>Register</h2>
                <p className= { styles.registerSubTitle }>Select the profile that fits to you</p>
                <div className={ styles.cardButtonsDiv }>
                    <div>
                        <button className={ styles.companyButton } >
                            <img src={ Company } alt="" />
                        </button>
                        <figcaption className= { styles.captionCompanyButton }>Business</figcaption>
                    </div>
                    <div>
                        <button className={ styles.freelancerButton }>
                            <img src={ Freelancer } alt="" />
                        </button>
                        <figcaption className= { styles.captionFreelancerButton }>Freelancer</figcaption>
                    </div>
                    <div>
                        <button className={ styles.personButton }>
                            <img src={ Person } alt="" />
                        </button>
                        <figcaption className= { styles.captionPersonButton }>Private User</figcaption>
                    </div>
                </div>
                
                <div className='d-flex pt-5 justify-content-center gap-4'>
                    <span className= { styles.spanCardForm }>I am from</span>
                    <Form.Select 
                        className={ styles.formSelectCard }
                        // ⬇️ colocar todo este style en el archivo css de arriba ⬇️ 
                        style={{width: '192px', height: '38px', padding:'6px 1rem', borderRadius:'1rem', marginLeft:'10px', color: '#B3B1B4', fontWeight: '300'}} aria-label="Default select example">
                        <option>
                            <span className={ styles.spanSelect }>Select</span>
                        </option>  
                    </Form.Select>
                    <button className={styles.continueCardButton}>
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
    </>
  )
}

export default Register