import React from 'react'
import User from '../../assets/Register/User.svg'
import Lock from '../../assets/Register/Lock.svg'
import Mail from '../../assets/Register/Mail.svg'
import Eye from '../../assets/Register/Eye.svg'
import EyeClose from '../../assets/Register/EyeClose.svg'
import { Form } from 'react-bootstrap'
import styles from './CreateNewAccount.module.css'
import { useState } from 'react'

const AccountDataForm = () => {
    
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [passwIconType, setPasswIconType] = useState('password')
    const [repeatPasswIconType, setRepeatPasswIconType] = useState('password')

  return (
    <Form>
        <div className={`d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ User } alt="User Icon" />
                    Username
                </Form.Label>
                <Form.Control 
                    style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                    type="text" 
                    placeholder= 'Your username'
                />
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Mail } alt="User Icon" />
                    Email Address
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type="email" placeholder="Your email here" />
            </Form.Group>
        </div>
        <div className={`${styles.inputWork} d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicSite">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Lock } alt="User Icon" />
                    Password
                </Form.Label>
                <Form.Control style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type= { passwIconType } placeholder= 'Enter your password' /> 
                <span
                    onClick={ () => { showPassword ? setShowPassword(false) : setShowPassword(true); showPassword ? setPasswIconType('password') : setPasswIconType('text') } }
                >
                        <img
                            style={ { position: 'absolute', left: '17.5rem', bottom: '8.7rem', cursor: 'pointer' } }
                            src={ showPassword ? Eye : EyeClose } alt="Eye Icon" />
                </span>
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicLinkedIn">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Lock } alt="User Icon" />
                    Repeat Password
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type={ repeatPasswIconType } placeholder="Repeat your password" />
                <span
                    onClick={ () => { showRepeatPassword ? setShowRepeatPassword(false) : setShowRepeatPassword(true); showRepeatPassword ? setRepeatPasswIconType('password') : setRepeatPasswIconType('text') } }
                >
                        <img
                            style={ { position: 'absolute', left: '38.5rem', bottom: '8.7rem', cursor: 'pointer' } }
                            src={ showRepeatPassword ? Eye : EyeClose } alt="Eye Icon" />
                </span>
            </Form.Group>
        </div>
    </Form>
  )
}

export default AccountDataForm