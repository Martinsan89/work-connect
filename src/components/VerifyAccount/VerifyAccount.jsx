import React from 'react'
import styles from './VerifyAccount.module.css'
// import logo from '../../assets/Register/LogoWorkConnect.svg'
import Logo from '../../assets/Login/Logo.svg'
import Vector from '../../assets/Register/Vector.svg'
import Elipse from '../../assets/Register/Elipse.svg'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyAccount = () => {

    const [code, setCode] = useState('')
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if( code === '1234' ) {
            navigate("/accountverified")
        } else {
            console.log('Código Incorrecto')
        }
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
                <h2 className= { styles.registerTitle }>Verify Account</h2>
                <p className= { styles.registerSubTitle }>Please enter your verification code below</p>
                <Form
                    onSubmit={ handleSubmit }
                >
                    <div className=''>
                        <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                            <Form.Control 
                                style={{width: '70%', margin: '0 auto', marginTop: '2rem', paddingLeft: '1.6rem', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}}
                                type="text" 
                                placeholder= 'Your code here'
                                value= { code }
                                onChange = { e => setCode(e.target.value) }
                            />
                        </Form.Group>
                    </div>
                    <div className='text-center'>
                        <button
                            className= { styles.submitButton }
                        >
                            Verify
                        </button>
                    </div>
                </Form>
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
    </>
  )
}

export default VerifyAccount