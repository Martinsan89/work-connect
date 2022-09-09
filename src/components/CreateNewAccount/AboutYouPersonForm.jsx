import React from 'react'
import User from '../../assets/Register/User.svg'
import Phone from '../../assets/Register/Phone.svg'
import Marker from '../../assets/Register/Marker.svg'
import { Form } from 'react-bootstrap'
import styles from './CreateNewAccount.module.css'

const AboutYouPersonForm = () => {
  return (
    <Form>
        <div className={`d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ User } alt="User Icon" />
                    First Name
                </Form.Label>
                <Form.Control 
                    style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                    type="text" 
                    placeholder= 'Your first name'
                />
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ User } alt="User Icon" />
                    Last Name
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type="text" placeholder="Your last name" />
            </Form.Group>
        </div>
        <div className={`d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Phone } alt="Phone Icon" />
                    Phone Number
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type="number" placeholder="Your phone number" />
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicSite">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Marker } alt="User Icon" />
                    Address
                </Form.Label>
                <Form.Control style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type="text" placeholder= 'Where are you located?' /> 
            </Form.Group>
        </div>
    </Form>
  )
}

export default AboutYouPersonForm