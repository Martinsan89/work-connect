import React, { useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import styles from '../Education/Education.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addEducation} from '../../../features/EducationFeature'

function ModalEducation(props) {

  const educationList = useSelector((state) =>state.educations.value)
  const dispatch = useDispatch();

  // console.log(props)
  
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [dateInicio, setDateInicio] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [text, setText] = useState('');
  const [stillStudyin, setStillStudyin] = useState(false);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{margin: 'auto', borderBottom:'none'}}>
          <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter">
            Add Education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div className={`${styles.inputWork}`}>
                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Career</Form.Label>
                    <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="text" placeholder="Sample Tech, Inc." onChange={(e) => {setTitle(e.target.value)}}/>
                </Form.Group>
                <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Degree</Form.Label>
                    <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}} type="text" placeholder="Master's Degree" onChange={(e) => {setSubtitle(e.target.value)}} />
                </Form.Group>
            </div>
            <Form.Group>
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px', marginTop:'1rem'}}>Institutionstit</Form.Label>
                <Form.Control as="textarea" style={{paddingLeft:'20px', width: '100%', height:'86px', borderRadius: '1rem'}} type="number" placeholder="United Virtual University" onChange={(e) => {setText(e.target.value)}} />
            </Form.Group>
            <div className={`${styles.inputJobs}`}>
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px', marginTop:'1rem'}}>From</Form.Label>
                <Form.Select style={{width: '13%', padding:'8px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example" onChange={(e) => {setDateInicio(e.target.value)}}>
                    <option>Select</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                </Form.Select>
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Until</Form.Label>
                <Form.Select style={{width: '13%', padding:'8px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example" onChange={(e) => {setDateFin(e.target.value)}}>
                    <option>Select</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                </Form.Select>
                <Form.Group style={{marginLeft:'10px'}} controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Still Studyin" onChange={() => {setStillStudyin(true)}} />
                </Form.Group>
            </div>
            <div>
                <Button  style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', border:'none', margin:'2rem 0' }} 
                onClick={() => { 
                  dispatch(addEducation({id: educationList[educationList.length - 1].id + 1,
                  title, subtitle, dateInicio, dateFin, text, stillStudyin})), dispatch(props.onHide)
                }}>ADD</Button>
                <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={props.onHide}>CANCEL</Button>
            </div>
        </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalEducation
