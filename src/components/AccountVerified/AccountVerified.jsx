import React from 'react'
import styles from './AccountVerified.module.css'
// import logo from '../../assets/Register/LogoWorkConnect.svg'
import Logo from '../../assets/Login/Logo.svg'
import Vector from '../../assets/Register/Vector.svg'
import Elipse from '../../assets/Register/Elipse.svg'
import { Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const AccountVerified = () => {

    const [goLogin, setGoLogin] = useState(false)

    if ( goLogin ) {
        return <Navigate to = "/" />
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
                <h2 className= { styles.registerTitle }>Account verified correctly!</h2>
                <p className= { styles.registerSubTitle }>We have verified your data, now you can login to your account</p>

                <div className='mb-3' style={ { marginTop: '0rem', paddingTop: '2rem', textAlign: 'center'} } >
                    <Button 
                        style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', border: 'none', borderRadius:'3rem', lineHeight:'20px' }} 
                        type="submit"
                        onClick={ () => { setGoLogin(true) } }
                    >
                            LOGIN
                    </Button>
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
    </>
  )
}

export default AccountVerified