import React, {useState, useReducer} from 'react'
import styles from '../Pages/Education.module.css'
import Edit from '../assets/Buttons/Edit.svg'
import {Button, Modal, Form} from 'react-bootstrap'
import Pen from '../assets/Edit/Pen.svg'
import Trash from '../assets/Edit/Trash.svg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{margin: 'auto'}}>
        <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter">
          Add Work Experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <div className={`${styles.inputWork}`}>
              <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Company</Form.Label>
                  <Form.Control style={{width: '90%', borderRadius: '1rem'}} type="email" placeholder="Sample Tech, Inc." />
              </Form.Group>
              <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Assignment(s)</Form.Label>
                  <Form.Label style={{fontWeight: '300'}}>(Seperate with comma)</Form.Label>
                  <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem'}} type="password" placeholder="Lead Developer" />
              </Form.Group>
          </div>
          <Form.Group>
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Job description</Form.Label>
              <Form.Control as="textarea" style={{paddingLeft:'20px', width: '100%', height:'86px', borderRadius: '1rem'}} type="password" placeholder="Lead Developer" />
          </Form.Group>
          <div className={`${styles.inputJobs}`}>
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>From</Form.Label>
              <Form.Select style={{width: '13%', padding:'8px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example">
                  <option>2020</option>
              </Form.Select>
              <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}}>Until</Form.Label>
              <Form.Select style={{width: '13%', padding:'8px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example">
                  <option>...</option>
              </Form.Select>
              <Form.Group style={{marginLeft:'10px'}} controlId="formBasicCheckbox">
                  <Form.Check type="radio" label="Still Working" />
              </Form.Group>
          </div>
          <div>
              <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px' }} type="submit">
                  UPDATE
              </Button>
              <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={props.onHide}>CANCEL</Button>
          </div>
      </Form>
      </Modal.Body>
    </Modal>
  );
}
const reducer = (state, action) => {
  switch (action.type) {
    case "toggleEdit":
      return{showEditIcons: state.showEditIcons = true, showEdit: !state.showEdit, showEditButtons: state.showEditButtons = true}
    case "closeEdit": 
      return{showEditIcons: !state.showEditIcons, showEdit: state.showEdit = true, showEditButtons: !state.showEditButtons}
    default: 
      return state;    
  }
}

export default function Education() {
  const [modalShow, setModalShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, {showEditIcons:false, showEdit:true, showEditButtons:false })

  return (
    <div>
      <div className={`${styles.educationTag}`}>
        <div className={`${styles.educationTitle}`}>
          <div className={`${styles.tagTitle}`}>
            <p>Systems Engineer</p>
          </div>
          <div className={`${styles.tagDate}`}>
            <p>From 2015 to 2020</p>
          </div>
        </div>
        {state.showEditIcons && <div style={{display: 'flex', justifyContent: 'flex-end', width: '28%', alignContent: 'center',
            position: 'relative', left: '73%', gap: '2rem', marginBottom:'-1rem'}}><img src={Pen} /><img src={Trash} /> </div> }
        <div>
          <div className={`${styles.subtitle}`}>
            <p>United Virtual University</p>
          </div>
          <div className={`${styles.text}`}>
            <p>Master's Degree</p>
          </div>
        </div>
      </div>
      <div className={`${styles.educationTag}`}>
        <div className={`${styles.educationTitle}`}>
          <div className={`${styles.tagTitle}`}>
            <p>Graphic Design</p>
          </div>
          <div className={`${styles.tagDate}`}>
            <p>From 2013 to 2015</p>
          </div>
        </div>
        <div>
          <div className={`${styles.subtitle}`}>
            <p>United Virtual University</p>
          </div>
          <div className={`${styles.text}`}>
            <p>Associate Degree</p>
          </div>
        </div>
      </div>
      <div className={`${styles.buttonSet}`}>
        {state.showEdit && <Button variant="primary" style={{backgroundColor: '#ffff',
        border: 'none'}}  onClick={() => dispatch({type:"toggleEdit"})}>
            <img className={`${styles.imgButton}`} src={Edit} alt="Chatbutton" /> 
        </Button>}
        {state.showEditButtons && <div style={{position: 'relative', top:'2rem'}}>
          <Button onClick={() => setModalShow(true)} style={{padding:'1rem', backgroundColor:'#142157', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px'}}>ADD</Button>
          <Button style={{padding:'1rem', backgroundColor:'#F14281', width:'140px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', color:'white', marginLeft:'10px'}} onClick={() => dispatch({type:"closeEdit"})} >SAVE</Button>
        </div> }
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
      </div>
    </div>
  )
}
