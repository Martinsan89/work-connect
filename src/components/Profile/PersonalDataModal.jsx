import { Modal, Button, Form, CloseButton } from 'react-bootstrap'
import styles from './Profile.module.css'
import { useState } from 'react';
import blackEdit from '../../assets/Buttons/blackEditButton.svg'
import lock from '../../assets/Buttons/LockIcon.svg'
import info from '../../assets/Buttons/info.svg'
import trash from '../../assets/Buttons/trash.svg'
import Eye from '../../assets/Profile/Eye.svg'
import Eyeclose from '../../assets/Profile/EyeClose.svg'

export default function PersonalDataModal(props) {
  const [personalData, setPersonalData] = useState(true);
  const [contactData, setContactData] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showRepPassword, setShowRepPassword] = useState(false)
  const [showCurrPassword, setShowCurrPassword] = useState(false)
  const [showDeletePassword, setShowDeletePassword] = useState(false)

  const [newPasswType, setNewPasswType] = useState('password')
  const [repPasswType, setRepPasswType] = useState('password')
  const [currPasswType, setCurrPasswType] = useState('password')
  const [deletePasswType, setDeletePasswType] = useState('password')

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CloseButton style={{position:'relative', top:'-3rem', left:'55rem'}} onClick={props.onHide} variant='white' />
        <Modal.Header style={{margin: 'auto', textDecoration: 'none'}}>
  
          {/* ⬇️ Acá debería ir el nav con el router ⬇️ */}
        { deleteAccount ?

        <div className='text-center'>
            <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter" className='d-flex'>
                <p className= { styles.deleteModalTitle }>Delete account</p>
            </Modal.Title>
            <p className= { styles.deleteModalSubTitle }>You are about to delete your profile. You will lose your messages and information. Consider this before proceeding.</p>
        </div>

        :

          <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter" className='d-flex'>
              <button
                style={ { border: 'none', backgroundColor: 'white' } }
                onClick={ () => { setPersonalData(true); setContactData(false); setSettingsModal(false) } }
              >
                <span
                    style={ personalData ? {color: '#107ACC', fontWeight: 'bold'} : {color: '#B3B1B4', fontWeight: 'bold'} }
                >
                        Personal Data
                </span> 
              </button>
              <button
                style={ { border: 'none', backgroundColor: 'white' } }
                className='mx-3'
                onClick= { () => { setPersonalData(false); setContactData(true); setSettingsModal(false) } }
              >
                <span
                    style={ contactData ? {color: '#107ACC', fontWeight: 'bold'} : {color: '#B3B1B4', fontWeight: 'bold'} }
                >
                        Contact Data
                </span> 
              </button>
              <button
                style={ { border: 'none', backgroundColor: 'white' } }
                onClick={ () => { setPersonalData(false); setContactData(false); setSettingsModal(true) } }
              >
                <span
                    style={ settingsModal ? {color: '#107ACC', fontWeight: 'bold'} : {color: '#B3B1B4', fontWeight: 'bold'} }
                >
                        Settings
                </span> 
              </button>
          </Modal.Title>
        }
        </Modal.Header>

        { personalData ? 
          <Modal.Body>
            <Form>
                <div className={`${styles.inputWork}`}>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicName">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Name</Form.Label>
                        <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="text" placeholder="Hans" />
                    </Form.Group>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicLastNa,e">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Last Name</Form.Label>
                        <Form.Control style={{paddingLeft:'10px', width: '90%', borderRadius: '1rem'}} type="text" placeholder="Van Rijn" />
                    </Form.Group>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicCompany">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Company</Form.Label>
                        <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="text" placeholder="Sample Tech, Inc." />
                    </Form.Group>
                </div>
                <Form.Group>
                    <Form.Label style={{fontWeight: '500',paddingTop: '1rem', paddingLeft: '5px', marginRight: '5px'}}>Proffession(s)</Form.Label>
                    <Form.Label style={{fontWeight: '300'}}>(separate with comma)</Form.Label> 
                    <Form.Control as="textarea" style={{paddingLeft:'20px', width: '100%', height:'46px', borderRadius: '1rem'}} type="text" placeholder="JavaScript Developer, WordPress Developer, Digital Security Inspector" />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={ { fontWeight: '500', paddingTop: '2rem', paddingLeft: '5px', marginRight: '5px' }}>Introduction</Form.Label>
                    <Form.Control as="textarea" style={ { paddingLeft:'20px', width: '100%', height:'86px', borderRadius: '1rem', marginBottom: '2.5rem' } } type="text" placeholder="JavaScript Developer, WordPress Developer, Digital Security Inspector" />
                </Form.Group>
                
                <div className='mb-3'>
                    <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px' }} type="submit">
                        SAVE
                    </Button>
                    <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={ () => {props.onHide()}}>CANCEL</Button>
                </div>
            </Form>
          </Modal.Body>

          :

          contactData ?

          <Modal.Body>
                <Form>
                    <div className={`${styles.inputWork}`}>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicNumber">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Phone Number</Form.Label>
                            <Form.Control 
                                style={{width: '90%', borderRadius: '1rem'}} 
                                type="number" 
                                placeholder= '+09 123 01 02 654'
                            />
                        </Form.Group>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Email Address</Form.Label>
                            <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}} type="email" placeholder="hansvanrijn@gmail.com" />
                        </Form.Group>
                    </div>
                    <div className={`${styles.inputWork}`}>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicSite">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Website</Form.Label>
                            <Form.Label style={{fontWeight: '300', marginLeft: '5px'}}>(Optional)</Form.Label>
                            <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="text" placeholder= 'hansvrijn.com' /> 
                        </Form.Group>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicLinkedIn">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>LinkedIn URL</Form.Label>
                            <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}} type="text" placeholder="linkedin.com/in/hansv.rijn" />
                        </Form.Group>
                    </div>
                    <div className={`${styles.inputWork}`}>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicAddress">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Address</Form.Label>
                            <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="text" placeholder= 'Lorem ipsum 76, Other, City' /> 
                        </Form.Group>
                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicRegion">
                            <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Province/Region</Form.Label>
                            <Form.Select style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}}  aria-label="Default select example">
                            <option>Friesland</option>
                        </Form.Select>
                        </Form.Group>
                    </div>
                    
                    <div className='mb-3' style={ { marginTop: '5rem', paddingTop: '2rem' } } >
                        <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px' }} type="submit">
                            SAVE
                        </Button>
                        <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={ () => {props.onHide(); setPersonalData(true); setContactData(false); setSettingsModal(false)}  }>CANCEL</Button>
                    </div>
                </Form>
            </Modal.Body>

            :

            settingsModal ?

        <Modal.Body>
            <h2 style={ { fontSize: '24px', marginBottom: '1.3rem' } }>Change Password</h2>
            <Form>
                <div className={`${styles.inputWork}`}>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>
                            <img src= { blackEdit } style = { { color: 'black', marginRight: '0.8rem' } }/>
                            New Password
                        </Form.Label>
                        <Form.Control style={{width: '90%', borderRadius: '1rem'}} type={ newPasswType } placeholder= 'Enter new password' />
                        <span
                            onClick={ () => { showNewPassword ? setShowNewPassword(false) : setShowNewPassword(true); showNewPassword ? setNewPasswType('password') : setNewPasswType('text') } }
                        >
                            <img
                                style={ { position: 'absolute', left: '19rem', top: '6.6rem', cursor: 'pointer'} }
                                src= { showNewPassword ? Eye : Eyeclose } alt="Eye Icon" />
                        </span>

                    </Form.Group>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicRepeatPassword">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>
                            <img src= { blackEdit } style = { { color: 'black', marginRight: '0.8rem' } }/>
                            Repeat Password
                        </Form.Label>
                        <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}} type={ repPasswType } placeholder="Repeat new password" />
                        <span
                            onClick={ () => { showRepPassword ? setShowRepPassword(false) : setShowRepPassword(true); showRepPassword ? setRepPasswType('password') : setRepPasswType('text') } }
                        >
                            <img
                                style={ { position: 'absolute', left: '43.5rem', top: '6.6rem', cursor: 'pointer'} }
                                src={ showRepPassword ? Eye : Eyeclose } alt="Eye Icon" />
                        </span>

                    </Form.Group>
                </div>
                <div className={`${styles.inputWork}`}>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicCurrentPass">
                        <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>
                            <img src= { lock } style = { { color: 'black', marginRight: '0.8rem' } }/>
                            Current Password
                        </Form.Label>
                        <Form.Control style={{width: '44%', borderRadius: '1rem'}} type={ currPasswType } placeholder= 'Enter your password' /> 
                        <span
                            onClick={ () => { showCurrPassword ? setShowCurrPassword(false) : setShowCurrPassword(true); showCurrPassword ? setCurrPasswType('password') : setCurrPasswType('text') } }
                        >
                            <img 
                                style={ { position: 'absolute', left: '19rem', top: '12rem', cursor: 'pointer' } }
                                src={ showCurrPassword ? Eye : Eyeclose } alt="Eye Icon" />
                        </span>

                    </Form.Group>
                </div>
                
                <hr style={ { marginTop: '1.5rem' } } />
                <div className='d-flex justify-content-between'>
                    <h2 style={ { fontSize: '24px' } }>
                        <img src = { info } style = { { marginRight: '0.8rem' } } />
                        Delete Account
                    </h2>

                    <a className= { styles.deleteAccountTrash }>
                        <button
                            className= { styles.buttonDeleteAccount }
                            onClick={ () =>   { setPersonalData(false); setContactData(false); setSettingsModal(false); setDeleteAccount(true) }  }
                        >
                        <img src = { trash } style = { { marginRight: '0.8rem' } } />
                            <span className= { styles.buttonDeleteAccount_span }>
                                Proceed to delete
                            </span> 
                        </button>
                    </a>
                </div>

                <div className='mb-3' style={ { marginTop: '4.4rem' } } >
                    <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px' }} type="submit">
                        SAVE
                    </Button>
                    <Button 
                        style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} 
                        onClick={ () => {props.onHide(); setPersonalData(true); setContactData(false); setSettingsModal(false)}  }>
                        CANCEL
                    </Button>
                </div>
            </Form>
        </Modal.Body>

        :

        deleteAccount ? 

        <Modal.Body>
            <Form>
                <div className={`${styles.inputWork}`}>
                    <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicName">
                        <Form.Label style={{fontWeight: '500', width: '60%', marginLeft: '10rem', paddingBottom: '0.2rem' }} className = '' >
                            <img src= { lock } style = { { color: 'black', marginRight: '0.8rem', paddingBottom: '0.3rem'} } alt="" />
                            Your Password
                        </Form.Label>
                        <Form.Control style={{width: '60%', borderRadius: '1rem', margin: '0 auto'}} type={ deletePasswType } placeholder="Enter your password" />
                        <span
                            onClick={ () => { showDeletePassword ? setShowDeletePassword(false) : setShowDeletePassword(true); showDeletePassword ? setDeletePasswType('password') : setDeletePasswType('text') } }
                        >
                            <img 
                                style={ { position: 'absolute', left: '36rem', top: '3.7rem', cursor: 'pointer' } }
                                src={  showDeletePassword ? Eye : Eyeclose   } alt="Eye Icon" />
                        </span>

                        <div className='text-center' style={ { paddingTop: '2rem', marginRight: '7rem' } }>
                            <input type='radio' className='text-center' />
                                <span className='ms-3'>
                                    I understand and I want to delete my profile.
                                </span>
                        </div>
                    </Form.Group>
                </div>
                <div className='mb-3' style={ { width: '100%', textAlign: 'center', paddingTop: '1.5rem', paddingBottom: '1rem' } }>
                    <Button 
                        style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} 
                        onClick={ () => { setSettingsModal(true); setDeleteAccount(false) }}
                    >CANCEL
                    </Button>
                    <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px' }} type="submit">
                        DELETE
                    </Button>
                </div>
            </Form>
        </Modal.Body>

            :

            ''

        }
        </Modal>
    );
  }

