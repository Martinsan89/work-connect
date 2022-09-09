import React, {useState} from 'react'
import {Button, Modal, Form, Dropdown, CloseButton} from 'react-bootstrap'
import styles from '../Modal/ModalAdvertisement.module.css'
import Clock from '../../../assets/Results/Modal/Clock.svg'
import Marker from '../../../assets/Results/Modal/Marker.svg'
import Vector from '../../../assets/Results/Modal/Vector.svg'
import Work from '../../../assets/Results/Modal/Work.svg'
import Chevron from '../../../assets/Results/Modal/Chevron.svg'


const ModalAdvertisement = (props) => {

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [journey, setJourney] = useState('');
  const [modality, setModality] = useState('');
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [requirements, setRequirements] = useState('');

  const LocationToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a style={{textDecoration:'none', color:'gray', display:'flex', gap:'10px', border:'1px solid', padding:'10px', borderRadius:'1rem', justifyContent:'center' }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={Marker} alt="marker" />
      {children}
      <img src={Chevron} alt="" />
    </a>
  ));
  const JourneyToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a style={{textDecoration:'none', color:'gray', display:'flex', gap:'10px', border:'1px solid', padding:'10px', borderRadius:'1rem', justifyContent:'center' }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={Clock} alt="marker" />
      {children}
      <img src={Chevron} alt="" />
    </a>
  ));
  const ModalityToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a style={{textDecoration:'none', color:'gray', display:'flex', gap:'10px', border:'1px solid', padding:'10px', borderRadius:'1rem', justifyContent:'center' }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={Work} alt="marker" />
      {children}
      <img src={Chevron} alt="" />
    </a>
  ));
  const CategoryToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a style={{textDecoration:'none', color:'gray', display:'flex', gap:'10px', border:'1px solid', padding:'10px', borderRadius:'1rem', justifyContent:'center' }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={Vector} alt="marker" />
      {children}
      <img src={Chevron} alt="" />
    </a>
  ));

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CloseButton style={{position:'relative', top:'-3rem', left:'55rem'}} onClick={props.onHide} variant='white' />
        <Modal.Header style={{margin: 'auto', borderBottom:'none'}}>
          <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter">
            Create an Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          {/* Offer Title */}
          <Form.Group className={`${styles.inputWork}`} style={{width: '100%'}} controlId="title">
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Offer Title</Form.Label>
              <Form.Control style={{width: '96%', borderRadius: '1rem'}} type="text" placeholder="Sample Tech, Inc." onChange={(e) => {setTitle(e.target.value)}}/>
          </Form.Group>
          {/* Dropwdowns */}
          <Form.Group style={{width: '97%', display:'flex', justifyContent:'space-evenly', gap:'20px', alignItems:'center'}} className="mb-3" controlId="select">
            <Dropdown style={{width:'22%'}}>
              <Dropdown.Toggle  as={LocationToggle} id="dropdown-basic">
                Location
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{width:'22%'}}>
              <Dropdown.Toggle  as={JourneyToggle} id="dropdown-basic">
                Journey
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{width:'22%'}}>
              <Dropdown.Toggle  as={ModalityToggle} id="dropdown-basic">
                Modality
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{width:'22%'}}>
              <Dropdown.Toggle  as={CategoryToggle} id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>       
          </Form.Group>
          {/* Job Description */}
          <Form.Group>
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px', marginTop:'1rem'}}>Job Description</Form.Label>
              <Form.Control as="textarea" style={{paddingLeft:'20px', width: '96%', height:'86px', borderRadius: '1rem'}} type="number" placeholder='Lorem ipsum dolor sit amet, consectetur adipsicong elit' onChange={(e) => {setText(e.target.value)}} />
          </Form.Group>
          {/* Requirements */}
          <Form.Group>
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px', marginTop:'1rem'}}>Requirements</Form.Label>
              <Form.Control as="textarea" style={{paddingLeft:'20px', width: '96%', height:'86px', borderRadius: '1rem'}} type="number" placeholder='-Masters Degree - Fluent or conversational English' onChange={(e) => {setRequirements(e.target.value)}} />
          </Form.Group>
          <Button  style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', border:'none', margin:'2rem 0' }} 
          onClick={() => { 
            dispatch(addEducation({id: educationList[educationList.length - 1].id + 1,
            title, subtitle, dateInicio, dateFin, text, stillStudyin})), dispatch(props.onHide)
          }}>ADD</Button>
        </Form>
        </Modal.Body>
      </Modal>
      
    </div>
  )
}

export default ModalAdvertisement
