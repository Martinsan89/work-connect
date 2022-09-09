import React, {useState} from 'react'
import {Button, Modal, Form, CloseButton} from 'react-bootstrap'
import English from '../../../assets/Flags/English.svg'
import Holland from '../../../assets/Flags/Holland.svg'
import Belgian from '../../../assets/Flags/Belgian.png'
import Chinese from '../../../assets/Flags/Chinese.png'
import Danish from '../../../assets/Flags/Danish.png'
import Dutch from '../../../assets/Flags/Dutch.png'
import French from '../../../assets/Flags/French.png'
import German from '../../../assets/Flags/German.png'
import Italian from '../../../assets/Flags/Italian.png'
import Norwegian from '../../../assets/Flags/Norwegian.png'
import Russian from '../../../assets/Flags/Russian.png'
import Spanish from '../../../assets/Flags/Spanish.png'
import Swedish from '../../../assets/Flags/Swedish.png'
import Turkish from '../../../assets/Flags/Turkish.png'
import StarFull from '../../../assets/Stars/StarFull.svg'
import StarEmpty from '../../../assets/Stars/StarEmpty.svg'
import styles from './Languages.module.css'
import { useDispatch } from 'react-redux'
import { updateLanguage } from '../../../features/LanguageFeature'

function UpdateLanguage(props) {

  const dispatch = useDispatch();

  const [language, setLanguage] = useState('')
  const [level, setLevel] = useState('')
  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <CloseButton style={{position:'relative', top:'-3rem', left:'55rem'}} onClick={props.onHide} variant='white' />
        <Modal.Header style={{margin: 'auto', borderBottom:'none'}}>
          <Modal.Title style={{color: '#107ACC'}} id="contained-modal-title-vcenter">
            Edit Languages
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <div style={{display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column', width:'90%'}}>
              <div style={{borderRight: '1.5px solid #B3B1B4', width:'95%'}}>
                <Form.Label style={{fontWeight: '500', paddingLeft: '15px'}}>From</Form.Label>
                <Form.Select style={{width: '90%', padding:'8px 18px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example" onChange={(e)=>{setLanguage(e.target.value)}}>
                  <option>Select</option>
                  <option>Belgian</option>
                  <option>Chinese</option>
                  <option>Danish</option>
                  <option>Dutch</option>
                  <option>English</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Holland</option>
                  <option>Italian</option>
                  <option>Norwegian</option>
                  <option>Russian</option>
                  <option>Spanish</option>
                  <option>Swedish</option>
                  <option>Turkish</option>
                </Form.Select>
                <Form.Label style={{fontWeight: '500', paddingLeft: '15px', marginTop:'1.5rem'}}>Level</Form.Label>
                <Form.Select style={{width: '90%', padding:'8px 18px', borderRadius:'1rem', marginLeft:'10px'}} aria-label="Default select example" onChange={(e)=>{setLevel(e.target.value)}}>
                  <option>Select</option>
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Conversational</option>
                  <option>Nativ</option>
                </Form.Select>
              </div>
              <div style={{margin:'2rem 0'}}>
                <Button  style={{padding:'1rem', backgroundColor:'#F14281', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', lineHeight:'20px', border:'none', margin:'2rem 0' }} 
                onClick={() => { 
                  dispatch(updateLanguage({id: props.id.id,
                  language, level})), dispatch(props.onHide)
                }}>UPDATE</Button>
                <Button style={{padding:'1rem', backgroundColor:'white', width:'160px', height:'52px', fontSize:'14px', fontWeight:'400', borderRadius:'3rem', border: '2px solid #F14281', lineHeight:'20px', color:'#F14281', marginLeft:'10px'}} onClick={props.onHide}>CANCEL</Button>
              </div>
            </div>
            <div style={{width:'35%'}}>
              <div style={{display:'flex', paddingTop:'1rem'}}>
                {language === 'Belgian' && <img src={Belgian} alt="flag" className={`${styles.flag}`} />}
                {language === 'Chinese' && <img src={Chinese} alt="flag" className={`${styles.flag}`} />}
                {language === 'Danish' && <img src={Danish} alt="flag" className={`${styles.flag}`} />}
                {language === 'Dutch' && <img src={Dutch} alt="flag" className={`${styles.flag}`} />}
                {language === 'English' && <img src={English} alt="flag" className={`${styles.flag}`} />}
                {language === 'French' && <img src={French} alt="flag" className={`${styles.flag}`} />}
                {language === 'German' && <img src={German} alt="flag" className={`${styles.flag}`} />}
                {language === 'Holland' && <img src={Holland} alt="flag" className={`${styles.flag}`} />}
                {language === 'Italian' && <img src={Italian} alt="flag" className={`${styles.flag}`} />}
                {language === 'Norwegian' && <img src={Norwegian} alt="flag" className={`${styles.flag}`} />}
                {language === 'Russian' && <img src={Russian} alt="flag" className={`${styles.flag}`} />}
                {language === 'Spanish' && <img src={Spanish} alt="flag" className={`${styles.flag}`} />}
                {language === 'Swedish' && <img src={Swedish} alt="flag" className={`${styles.flag}`} />}
                {language === 'Turkish' && <img src={Turkish} alt="flag" className={`${styles.flag}`} />}
                {/* <img src={English} alt="flag" className={`${styles.flag}`} /> */}
              </div>
              <div style={{marginTop:'3.5rem'}}>
                {level === 'Basic' && <div>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                </div>}
                {level === 'Intermediate' && <div>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                </div>}
                {level === 'Conversational' && <div>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarEmpty} alt="starEmpty" className={`${styles.star}`}/>
                </div>}
                {level === 'Nativ' && <div>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                  <img src={StarFull} alt="starFUll" className={`${styles.star}`}/>
                </div>}
              </div>
            </div>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
      
    </div>
  )
}

export default UpdateLanguage
