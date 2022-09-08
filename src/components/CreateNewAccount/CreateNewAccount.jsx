import React, { useState } from 'react'
import styles from './CreateNewAccount.module.css'
import logo from '../../assets/Register/LogoWorkConnect.svg'
import Vector from '../../assets/Register/Vector.svg'
import Elipse from '../../assets/Register/Elipse.svg'
import { Button } from 'react-bootstrap'
import AccountDataForm from './AccountDataForm' 
import AboutYouForm from './AboutYouForm' // Company
import AboutYouFreeForm from './AboutYouFreeForm' // Freelancer
import AboutYouPersonForm from './AboutYouPersonForm' // Private User
import ProfileDataForm from './ProfileDataForm' // Company
import ProfileDataFyPForm from './ProfileDataFyPForm' // Freelancer & Private User
import { Navigate, useNavigate } from 'react-router-dom'


const CreateNewAccount = ({ companyButton, freelaButton, personButon }) => {

    const [accountData, setAccountData] = useState(true)
    const [aboutYou, setAboutYou] = useState(false)
    const [profileData, setProfileData] = useState(false)

    const [created, setCreated] = useState(false)
    
    const navigateTo = useNavigate();

    if(created) {
        return <Navigate to="/usercreated" />
    }  
    
    function handleVerify() {
        setTimeout(() => {
            navigateTo("/verifyaccount")
        }, 3500);
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

            <div className={ styles.registerCard } style={ freelaButton && aboutYou ? { height: '560px' } : { height: '460px' }  }>
                <h2 className= { styles.registerTitle }>Create New Account</h2>
                {/* ⬇️ Acá va la barra de navegación. Probar Router ⬇️ */}
                <div className={ styles.cardButtonsDiv }>
                    <span
                        onClick={ () => { setAccountData(true); setAboutYou(false); setProfileData(false) } }
                        style={ accountData ? { backgroundColor: '#2898EE', color: 'white', padding: '1rem 2.5rem', marginLeft: '-1rem', borderRadius: '42px', cursor: 'pointer'} : { color: '#2898EE', padding: '1rem 2.5rem', marginLeft: '-1rem', borderRadius: '42px', cursor: 'pointer'} } 
                        className= ''>
                            <span 
                            style={ accountData ? { border: 'solid', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem' } : { border: 'solid #2898EE', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem', backgroundColor: '#2898EE', color: '#FFFFFF' } }>
                                1
                            </span>
                            Account Data
                    </span>
                    <span 
                        onClick={ () => { setAccountData(false); setAboutYou(true); setProfileData(false) } }
                        style={ aboutYou ? { backgroundColor: '#2898EE', color: 'white', padding: '1rem 3rem', borderRadius: '42px', position: 'relative', left: '0.75rem', cursor: 'pointer' } : accountData ? {padding: '1rem 3rem', color: '#B3B1B4', borderRadius: '42px', position: 'relative', left: '0.75rem', cursor: 'pointer'} : {padding: '1rem 3rem', color: '#2898EE', borderRadius: '42px', position: 'relative', left: '0.75rem', cursor: 'pointer'} } 
                        className= ''>
                            <span style={ aboutYou ? { border: 'solid', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem' } : accountData ? { border: 'solid #B3B1B4', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem', backgroundColor: '#B3B1B4', color: '#FFFFFF' } : { border: 'solid #2898EE', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem', backgroundColor: '#2898EE', color: '#FFFFFF' } }>
                                2
                            </span>
                            About You
                    </span>
                    <span 
                        onClick={ () => { setAccountData(false); setAboutYou(false); setProfileData(true) } }
                        style={ profileData ? { backgroundColor: '#2898EE', color: 'white', padding: '1rem 3rem', position: 'relative', left: '1.4rem', borderRadius: '42px' } : {padding: '1rem 3rem', color: '#B3B1B4', cursor: 'pointer', position: 'relative', left: '1.4rem'} }
                        className= ''>
                            <span style={ profileData ? { border: 'solid', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem' } : { border: 'solid #B3B1B4', borderRadius: '50%', padding: '0.1rem 0.4rem', marginRight: '0.5rem', backgroundColor: '#B3B1B4', color: '#FFFFFF' } }>
                                3
                            </span>
                            Profile Data
                    </span>
                </div>
                
                <div className='ms-4 mt-4'>
                    {
                        accountData ? <AccountDataForm /> : companyButton && aboutYou ? <AboutYouForm /> : freelaButton && aboutYou ? <AboutYouFreeForm /> : personButon && aboutYou ? <AboutYouPersonForm /> : companyButton && profileData ? <ProfileDataForm /> : <ProfileDataFyPForm />
                    }
                </div>
                <div className='mb-3' style={ accountData || aboutYou ? { marginTop: '0rem', paddingTop: '2rem', textAlign: 'center'} : { marginTop: '0rem', paddingTop: '0rem', textAlign: 'center'} } >
                    <Button
                        style={{padding:'1rem', backgroundColor:'#142157', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: 'none', lineHeight:'20px', color:'#FFFFFF', marginRight:'10px', marginLeft: '-1.5rem'}} 
                        onClick={ () => {props.onHide(); setPersonalData(true); setContactData(false); setSettingsModal(false)}  }>
                            CANCEL
                    </Button>
                    <Button  
                        onClick= { () => { accountData ?  setAccountData(false) & setAboutYou(true) & setProfileData(false) : aboutYou ? setAccountData(false) & setAboutYou(false) & setProfileData(true) : profileData ? setCreated(true) & handleVerify() : '' } }
                        style={{ padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', border: 'none', borderRadius:'3rem', lineHeight:'20px' }} 
                        type="submit">
                            {
                                accountData ? 'NEXT' : aboutYou ? 'NEXT' : 'DONE'
                            }
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

export default CreateNewAccount