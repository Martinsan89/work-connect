import React from 'react'
import styles from './NewPasswordDone.module.css'
import logo from '../../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../../assets/Register/Vector.svg'
import Elipse from '../../../assets/Register/Elipse.svg'
import { Button } from 'react-bootstrap'

const NewPasswordDone = () => {
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
                <h2 className= { styles.registerTitle }>Password Reset Complete!</h2>
                <p className= { styles.registerSubTitle }>Your password has been set up. You can proceed to sign in.</p>

                <div className='' style={ { textAlign: 'center', marginTop: '2rem'} } >
                    <Button 
                        style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', border: 'none', borderRadius:'3rem', lineHeight:'20px' }} 
                        type="submit">
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
            <p className={ styles.copyrightText }>Copyright ??  WorkConnect 2022. All Rights Reserved.</p>
        </div>
    </>
  )
}

export default NewPasswordDone