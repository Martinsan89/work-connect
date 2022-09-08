import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './CreateNewAccount.module.css'
import Work from '../../assets/Register/Work.svg'
import LinkedIn from '../../assets/Register/LinkedIn.svg'
import Text from '../../assets/Register/Text.svg'

const ProfileDataFyPForm = () => {
  return (
    <Form>
        <div className={`d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px', marginRight: '0.3rem'}} className='mb-3'>
                    <img className='me-3' src={ Work } alt="Business Icon" />
                    Profession(s)
                </Form.Label>
                <Form.Label style={{fontWeight: '300'}}>(Separate with comma)</Form.Label>
                <Form.Control 
                    style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                    type="text" 
                    placeholder= 'What do you do?'
                />
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ LinkedIn } alt="LinkedIn Icon" />
                    LinkedIn
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} type="text" placeholder="Your LinkedIn URL" />
            </Form.Group>
        </div>
        <div className={`${styles.inputWork} d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicSite">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Text } alt="Introduction Icon" />
                    Introduction
                </Form.Label>
                <textarea style={{width: '95%', height: '5rem', border: '1px solid #B3B1B4', borderRadius: '1rem', paddingLeft: '1rem', paddingTop: '0.3rem', color: '#B3B1B4', fontWeight: '300'}} type="text" placeholder= 'Write something about you' /> 
            </Form.Group>
        </div>
    </Form>
  )
}

export default ProfileDataFyPForm