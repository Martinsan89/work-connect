import React from 'react'
import styles from './VerifyAccount.module.css'
import logo from '../../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../../assets/Register/Vector.svg'
import Elipse from '../../../assets/Register/Elipse.svg'
import { Form } from 'react-bootstrap'

const VerifyAccount = () => {
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
                <h2 className= { styles.registerTitle }>Verify Account</h2>
                <p className= { styles.registerSubTitle }>Please enter your verification code below</p>
                <Form>
                    <div className=''>
                        <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                            <Form.Control 
                                style={{width: '70%', margin: '0 auto', marginTop: '2rem', paddingLeft: '1.6rem', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}}
                                className= { styles.inputCodeForm } 
                                type="text" 
                                placeholder= 'Your code here'
                            />
                        </Form.Group>
                    </div>
                </Form>
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

export default VerifyAccount