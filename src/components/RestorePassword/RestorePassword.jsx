import React from 'react'
import styles from './RestorePassword.module.css'
import logo from '../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../assets/Register/Vector.svg'
import Elipse from '../../assets/Register/Elipse.svg'
import Mail from '../../assets/Register/Mail.svg'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const RestorePassword = () => {

    const [goToRestoreSent, setGoToRestoreSent] = useState(false)

    if(goToRestoreSent) {
        return <Navigate to="/restoresent" />
    }

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
                <h2 className= { styles.registerTitle }>Restore Password</h2>
                <p className= { styles.registerSubTitle }>Forgot your password? Input your email address below and we’ll send you instructions to set a new one</p>

                <Form>
                    <div className='mt-4'>
                        <Form.Group style={ { width: '100%' } } className="mb-4" controlId="formBasicNumber">
                        <Form.Label style={ { fontWeight: '500', paddingLeft: '7rem' } } className='mb-3'>
                            <img className='me-3' src={ Mail } alt="User Icon" />
                            Email Address
                        </Form.Label>
                            <Form.Control 
                                style={{width: '70%', margin: '0 auto', paddingLeft: '1.6rem', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}}
                                className= { styles.inputCodeForm } 
                                type="email" 
                                placeholder= 'Your email here'
                            />
                        </Form.Group>
                    </div>
                </Form>

                <div className='mb-3' style={ { textAlign: 'center', marginTop: '2rem'} } >
                    <Button
                        onClick={ () => { setGoToRestoreSent(true) } }
                        style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', border: 'none', borderRadius:'3rem', lineHeight:'20px' }} 
                        type="submit"
                    >
                            SUBMIT
                    </Button>
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

export default RestorePassword